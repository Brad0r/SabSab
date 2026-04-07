const fs = require('fs');
const path = require('path');

const SAMPLE_RATE = 44100;
const TWO_PI = Math.PI * 2;
const OUTPUT_DIR = path.join(__dirname, 'assets', 'instruments');

function clamp(value, min = -1, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function smoothEnvelope(t, duration, attack, release) {
  const attackShape = attack <= 0 ? 1 : Math.min(1, t / attack);
  const releaseStart = Math.max(0, duration - release);
  const releaseShape = t >= releaseStart && release > 0
    ? Math.max(0, 1 - ((t - releaseStart) / release))
    : 1;
  return attackShape * releaseShape;
}

function normalizeSamples(samples, peak = 0.92) {
  let max = 0.0001;
  for (let i = 0; i < samples.length; i += 1) {
    max = Math.max(max, Math.abs(samples[i]));
  }
  const gain = peak / max;
  for (let i = 0; i < samples.length; i += 1) {
    samples[i] *= gain;
  }
  return samples;
}

function addEchoResonance(samples, delaysMs = []) {
  const output = new Float32Array(samples);
  delaysMs.forEach(([delayMs, feedback]) => {
    const delay = Math.max(1, Math.floor((delayMs / 1000) * SAMPLE_RATE));
    for (let i = delay; i < output.length; i += 1) {
      output[i] += output[i - delay] * feedback;
    }
  });
  return output;
}

function writeMonoWav(filePath, samples, sampleRate = SAMPLE_RATE) {
  const pcm = Buffer.alloc(samples.length * 2);
  for (let i = 0; i < samples.length; i += 1) {
    const value = clamp(samples[i]);
    pcm.writeInt16LE(Math.round(value * 32767), i * 2);
  }

  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, Buffer.concat([header, pcm]));
}

function generatePianoSample(freq = 261.63, duration = 2.8) {
  const length = Math.floor(duration * SAMPLE_RATE);
  const samples = new Float32Array(length);
  const partials = [1, 0.72, 0.43, 0.25, 0.14, 0.08];

  for (let i = 0; i < length; i += 1) {
    const t = i / SAMPLE_RATE;
    const attack = 1 - Math.exp(-95 * t);
    const decay = Math.exp(-3.2 * t);
    const env = attack * decay;

    let tone = 0;
    partials.forEach((amp, index) => {
      const harmonic = index + 1;
      const detune = 1 + (0.0006 * Math.sin(TWO_PI * (0.52 + (index * 0.13)) * t));
      tone += amp * Math.sin(TWO_PI * freq * harmonic * detune * t);
    });

    const hammer = (Math.random() * 2 - 1) * 0.05 * Math.exp(-60 * t);
    const resonance = 0.16 * Math.sin(TWO_PI * freq * 2.01 * t) * Math.exp(-2.4 * t);
    samples[i] = (tone * env * 0.38) + hammer + resonance;
  }

  return normalizeSamples(addEchoResonance(samples, [
    [29, 0.22],
    [47, 0.14],
    [83, 0.09],
  ]));
}

function generateViolinSample(freq = 220, duration = 4.4) {
  const length = Math.floor(duration * SAMPLE_RATE);
  const samples = new Float32Array(length);
  const partials = [1, 0.76, 0.58, 0.39, 0.28, 0.18];

  for (let i = 0; i < length; i += 1) {
    const t = i / SAMPLE_RATE;
    const env = smoothEnvelope(t, duration, 0.12, 0.28);
    const vibrato = (0.0048 * Math.sin(TWO_PI * 5.15 * t)) + (0.0014 * Math.sin(TWO_PI * 7.1 * t));
    const dynamicFreq = freq * (1 + vibrato);

    let tone = 0;
    partials.forEach((amp, index) => {
      const harmonic = index + 1;
      tone += amp * Math.sin(TWO_PI * dynamicFreq * harmonic * t);
    });

    const bowNoise = ((Math.random() * 2 - 1) * 0.05 * (0.65 + 0.35 * Math.sin(TWO_PI * 9.5 * t))) * env;
    samples[i] = ((tone * 0.24) + bowNoise) * env;
  }

  return normalizeSamples(addEchoResonance(samples, [
    [18, 0.18],
    [41, 0.11],
  ]), 0.9);
}

function generatePanFluteSample(freq = 261.63, duration = 3.2) {
  const length = Math.floor(duration * SAMPLE_RATE);
  const samples = new Float32Array(length);

  for (let i = 0; i < length; i += 1) {
    const t = i / SAMPLE_RATE;
    const env = smoothEnvelope(t, duration, 0.05, 0.42);
    const vibrato = (0.003 * Math.sin(TWO_PI * 4.2 * t)) + (0.0008 * Math.sin(TWO_PI * 6.3 * t));
    const dynamicFreq = freq * (1 + vibrato);
    const breath = (Math.random() * 2 - 1) * 0.02 * (0.8 + 0.2 * Math.sin(TWO_PI * 3.3 * t));

    const fundamental = Math.sin(TWO_PI * dynamicFreq * t);
    const second = 0.18 * Math.sin(TWO_PI * dynamicFreq * 2 * t);
    const third = 0.06 * Math.sin(TWO_PI * dynamicFreq * 3.01 * t);
    samples[i] = ((fundamental * 0.42) + second + third + breath) * env;
  }

  return normalizeSamples(addEchoResonance(samples, [
    [33, 0.12],
    [58, 0.08],
  ]), 0.88);
}

function generateTriangleSample(freq = 523.25, duration = 3.0) {
  const length = Math.floor(duration * SAMPLE_RATE);
  const samples = new Float32Array(length);
  const inharmonics = [1, 2.91, 4.13, 6.79, 8.21];
  const amplitudes = [1, 0.56, 0.34, 0.22, 0.12];

  for (let i = 0; i < length; i += 1) {
    const t = i / SAMPLE_RATE;
    const attack = 1 - Math.exp(-120 * t);
    const decay = Math.exp(-1.65 * t);
    let tone = 0;

    inharmonics.forEach((ratio, index) => {
      tone += amplitudes[index] * Math.sin(TWO_PI * freq * ratio * t) * Math.exp(-(0.25 + index * 0.18) * t);
    });

    const strike = (Math.random() * 2 - 1) * 0.025 * Math.exp(-45 * t);
    samples[i] = ((tone * 0.28) + strike) * attack * decay;
  }

  return normalizeSamples(addEchoResonance(samples, [
    [52, 0.22],
    [97, 0.13],
    [141, 0.09],
  ]), 0.9);
}

const sampleJobs = [
  { name: 'piano-c4.wav', make: () => generatePianoSample(261.63, 2.8) },
  { name: 'violin-a3.wav', make: () => generateViolinSample(220.0, 4.4) },
  { name: 'panflute-c4.wav', make: () => generatePanFluteSample(261.63, 3.2) },
  { name: 'triangle-c5.wav', make: () => generateTriangleSample(523.25, 3.0) },
];

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

sampleJobs.forEach((job) => {
  const outputPath = path.join(OUTPUT_DIR, job.name);
  writeMonoWav(outputPath, job.make());
  const stats = fs.statSync(outputPath);
  console.log(`Créé: ${path.relative(__dirname, outputPath)} (${Math.round(stats.size / 1024)} Ko)`);
});
