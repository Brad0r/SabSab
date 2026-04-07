from __future__ import annotations

import json
from pathlib import Path

import librosa
import numpy as np
import soundfile as sf
from moviepy import VideoFileClip

VIDEO_PATH = Path(r"C:\Users\bradl\Downloads\2026-04-07 15-55-37.mp4")
OUT_DIR = Path(r"c:\Users\bradl\Desktop\Codage\SabSab\assets\instruments")
TEMP_AUDIO = OUT_DIR / "_guitarre_celeste_source.wav"
OUTPUT_AUDIO = OUT_DIR / "guitarre-celeste.wav"
OUTPUT_INFO = OUT_DIR / "guitarre-celeste.json"
TARGET_SR = 44100
TARGET_NOTE_IDS = [
    "c3", "d3", "e3", "f3", "g3",
    "a3", "b3", "c4", "d4", "e4",
    "f4", "g4", "a4", "b4", "c5",
]
TARGET_NOTE_FREQS = {
    "c3": 130.81,
    "d3": 146.83,
    "e3": 164.81,
    "f3": 174.61,
    "g3": 196.00,
    "a3": 220.00,
    "b3": 246.94,
    "c4": 261.63,
    "d4": 293.66,
    "e4": 329.63,
    "f4": 349.23,
    "g4": 392.00,
    "a4": 440.00,
    "b4": 493.88,
    "c5": 523.25,
}
NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
FRENCH_NOTE_NAMES = {
    "C": "Do",
    "C#": "Do♯",
    "D": "Ré",
    "D#": "Ré♯",
    "E": "Mi",
    "F": "Fa",
    "F#": "Fa♯",
    "G": "Sol",
    "G#": "Sol♯",
    "A": "La",
    "A#": "La♯",
    "B": "Si",
}


def freq_to_note_name(freq: float) -> str:
    if not np.isfinite(freq) or freq <= 0:
        return "Unknown"
    midi = int(round(69 + 12 * np.log2(freq / 440.0)))
    name = NOTE_NAMES[midi % 12]
    octave = (midi // 12) - 1
    return f"{name}{octave}"


def note_to_french_label(note_name: str) -> tuple[str, str]:
    if not note_name or note_name == "Unknown":
      return ("Note", "Note")
    base = note_name[:-1] if note_name[-1].isdigit() else note_name
    octave = note_name[-1] if note_name[-1].isdigit() else ""
    french = FRENCH_NOTE_NAMES.get(base, base)
    return french, f"{french}{octave}"


def clean_segment(segment: np.ndarray, sr: int) -> np.ndarray:
    sample = np.asarray(segment, dtype=np.float32).copy()
    fade_len = max(24, int(sr * 0.012))
    if sample.size > fade_len * 2:
        sample[:fade_len] *= np.linspace(0.0, 1.0, fade_len, dtype=np.float32)
        sample[-fade_len:] *= np.linspace(1.0, 0.0, fade_len, dtype=np.float32)
    peak = float(np.max(np.abs(sample))) if sample.size else 0.0
    if peak > 0:
        sample = sample * (0.98 / peak)
    return sample


OUT_DIR.mkdir(parents=True, exist_ok=True)

if not VIDEO_PATH.exists():
    raise SystemExit(f"Missing source video: {VIDEO_PATH}")

clip = VideoFileClip(str(VIDEO_PATH))
if clip.audio is None:
    clip.close()
    raise SystemExit("No audio track found in the provided video.")

clip.audio.write_audiofile(
    str(TEMP_AUDIO),
    fps=TARGET_SR,
    nbytes=2,
    logger=None,
)
clip.close()

y, sr = librosa.load(TEMP_AUDIO, sr=TARGET_SR, mono=True)
y = librosa.util.normalize(y)
trimmed, _ = librosa.effects.trim(y, top_db=32)
if trimmed.size:
    y = trimmed

harmonic, _ = librosa.effects.hpss(y)
onset_frames = librosa.onset.onset_detect(
    y=harmonic,
    sr=sr,
    units="frames",
    backtrack=True,
    pre_max=10,
    post_max=10,
    delta=0.12,
    wait=8,
)
onset_samples = librosa.frames_to_samples(onset_frames).tolist()

boundaries = [0, *onset_samples, len(harmonic)]
candidates: list[dict] = []

for index in range(len(boundaries) - 1):
    start = max(0, int(boundaries[index]))
    end = max(start, int(boundaries[index + 1]))
    segment = harmonic[start:end]
    duration = (end - start) / sr

    if duration < 0.18:
        continue

    rms = float(np.sqrt(np.mean(segment ** 2))) if segment.size else 0.0
    if rms < 0.01:
        continue

    f0 = librosa.yin(segment, fmin=80, fmax=1200, sr=sr, frame_length=2048, hop_length=256)
    valid_f0 = f0[np.isfinite(f0) & (f0 > 0)]
    if valid_f0.size < 6:
        continue

    median_freq = float(np.median(valid_f0))
    stability = float(np.std(valid_f0) / max(median_freq, 1.0))
    score = (duration * rms) / (0.02 + stability)
    note_name = freq_to_note_name(median_freq)
    display_name, display_label = note_to_french_label(note_name)

    candidates.append({
        "start": start,
        "end": end,
        "duration": duration,
        "rms": rms,
        "median_freq": median_freq,
        "note": note_name,
        "display_name": display_name,
        "display_label": display_label,
        "stability": stability,
        "score": score,
    })

if len(candidates) < len(TARGET_NOTE_IDS):
    raise SystemExit(f"Only {len(candidates)} note segments found; expected {len(TARGET_NOTE_IDS)}.")

selected = sorted(candidates, key=lambda item: item["start"])[: len(TARGET_NOTE_IDS)]
pad = int(sr * 0.02)
saved_samples: list[dict] = []

for target_note_id, item in zip(TARGET_NOTE_IDS, selected):
    start = max(0, int(item["start"]) - pad)
    end = min(len(y), int(item["end"]) + pad)
    sample = clean_segment(y[start:end], sr)
    output_path = OUT_DIR / f"guitarre-celeste-{target_note_id}.wav"
    sf.write(output_path, sample, sr)

    saved_samples.append({
        "target_note_id": target_note_id,
        "sample_path": str(output_path),
        "source_note": item["note"],
        "display_name": item["display_name"],
        "display_label": item["display_label"],
        "source_freq": round(float(item["median_freq"]), 2),
        "keyboard_root_freq": TARGET_NOTE_FREQS[target_note_id],
        "segment_start_sec": round(start / sr, 3),
        "segment_end_sec": round(end / sr, 3),
        "duration_sec": round((end - start) / sr, 3),
    })

best = max(selected, key=lambda item: item["score"])
best_start = max(0, int(best["start"]) - pad)
best_end = min(len(y), int(best["end"]) + pad)
best_sample = clean_segment(y[best_start:best_end], sr)
sf.write(OUTPUT_AUDIO, best_sample, sr)

info = {
    "source_video": str(VIDEO_PATH),
    "sample_path": str(OUTPUT_AUDIO),
    "root_freq": round(float(best["median_freq"]), 2),
    "root_note": best["note"],
    "segment_start_sec": round(best_start / sr, 3),
    "segment_end_sec": round(best_end / sr, 3),
    "duration_sec": round((best_end - best_start) / sr, 3),
    "samples": saved_samples,
}

OUTPUT_INFO.write_text(json.dumps(info, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(info, ensure_ascii=False, indent=2))
