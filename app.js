const MEDIA = {
  candles: {
    off: "Designe Site/Bougies/Bougie éteinte.png",
    on: "Designe Site/Bougies/Bougie allumé.png",
    sound: "Designe Site/Bougies/Flamme qui s'allume.mp3",
  },
  eden: {
    bg: "Jeu des krill/Eden.png",
    avatar: "Jeu des krill/skykidvol.png",
    krillLeft: "Jeu des krill/Krill gauche.png",
    krillRight: "Jeu des krill/Krill droite.png",
    orangeCandle: "Jeu des krill/Bougie orange.png",
    dead: "Jeu des krill/Skykid mort.png",
    winGift: "Jeu des krill/Cadeau.png",
    winWarn: "Jeu des krill/Abuse pas.png",
    gameOverSound: "Jeu des krill/Game Over.mp3",
    honks: [
      "Jeu des krill/Honk (1).mp3",
      "Jeu des krill/Honk (2).mp3",
      "Jeu des krill/Honk (3).mp3",
    ],
  },
  site: {
    music: [
      "Designe Site/Son du site/Musique/Lud.mp3",
      "Designe Site/Son du site/Musique/Ma princesse.mp3",
      "Designe Site/Son du site/Musique/Mon diamant.mp3",
      "Designe Site/Son du site/Musique/Prison de sable.mp3",
      "Designe Site/Son du site/Musique/Rouhi ❤️.mp3",
      "Designe Site/Son du site/Musique/Sab.mp3",
    ],
  },
  quiz: {
    good: [
      {
        image: "image et son pour le questionnaire/Bonne réponse 1/Ouaiii.png",
        sound: "image et son pour le questionnaire/Bonne réponse 1/Ouaiii.m4a",
      },
      {
        image: "image et son pour le questionnaire/Bonne réponse 2/Mhhh ta triché .png",
        sound: "image et son pour le questionnaire/Bonne réponse 2/TaTriché.m4a",
      },
      {
        image: "image et son pour le questionnaire/Bonne réponse 3/YeeeheeeOuiiiheee.png",
        sound: "image et son pour le questionnaire/Bonne réponse 3/Enregistrement (2).m4a",
      },
      {
        image: "image et son pour le questionnaire/Bonne réponse 4/Ouiiiheee.png",
        sound: "image et son pour le questionnaire/Bonne réponse 4/Enregistrement.m4a",
      },
      {
        image: "image et son pour le questionnaire/Bonne réponse 5/Ui.png",
        sound: "image et son pour le questionnaire/Bonne réponse 5/Enregistrement.m4a",
      },
    ],
    bad: [
      {
        image: "image et son pour le questionnaire/Mauvaise réponse 1/ChokbarTuM'aFaitChialé.png",
        sound: "image et son pour le questionnaire/Mauvaise réponse 1/Enregistrement.m4a",
      },
      {
        image: "image et son pour le questionnaire/Mauvaise réponse 2/Eh.png",
        sound: "image et son pour le questionnaire/Mauvaise réponse 2/Enregistrement.m4a",
      },
      {
        image: "image et son pour le questionnaire/Mauvaise réponse 3/ChoquéEtDéçu.png",
        sound: "image et son pour le questionnaire/Mauvaise réponse 3/Enregistrement (3).m4a",
      },
      {
        image: "image et son pour le questionnaire/Mauvaise réponse 4/Hein.png",
        sound: "image et son pour le questionnaire/Mauvaise réponse 4/Enregistrement.m4a",
      },
      {
        image: "image et son pour le questionnaire/Mauvaise réponse 5/Pffff.png",
        sound: "image et son pour le questionnaire/Mauvaise réponse 5/Enregistrement.m4a",
      },
    ],
    doubt1: {
      image: "image et son pour le questionnaire/Doute 1/Tié sur.png",
      sound: "image et son pour le questionnaire/Doute 1/Enregistrement.m4a",
    },
    doubt2: {
      image: "image et son pour le questionnaire/Doute 2/Je saiiiis paaaas.png",
      sound: "image et son pour le questionnaire/Doute 2/Enregistrement.m4a",
    },
    middle: {
      image: "image et son pour le questionnaire/Milieu du questionnaire/TuYEestPresque.png",
      sound: "image et son pour le questionnaire/Milieu du questionnaire/Enregistrement (2).m4a",
    },
    final: {
      image: "image et son pour le questionnaire/Image finale/Nous.png",
      sound: "image et son pour le questionnaire/Image finale/Enregistrement.m4a",
    },
  },
};

const QUOTES_GOOD = [
  "Technique du souffle de l'amour, premier style !",
  "Ton coeur frappe plus fort que n'importe quelle lame.",
  "Destin valide: l'ame soeur est detectee.",
  "Flamme pure. Reponse legendaire.",
];

const QUOTES_BAD = [
  "Ouille... le coeur vacille.",
  "Ce choix blesse la lame du destin.",
  "Raté. Tu peux encore te rattraper.",
  "Le vent du doute souffle fort.",
];

const STORAGE_KEYS = {
  krillUnlocked: "sabsab.krillUnlocked",
};

const questions = [
  {
    question: "Je préfère quoi parmi ces 4 légumes ?",
    options: ["Epinard", "Brocoli", "Courgette", "Carotte"],
    reponseCorrecte: "Epinard",
  },
  {
    question: "J'ai quel âge ?",
    options: ["22 ans", "20 ans", "23 ans", "24 ans"],
    reponseCorrecte: "22 ans",
  },
  {
    question: "Ma série préférée ?",
    options: ["DC's Legends of Tomorrow", "The 100", "Lucifer", "Stranger Things"],
    reponseCorrecte: "DC's Legends of Tomorrow",
  },
  {
    question: "Mon chanteur préféré ?",
    options: ["J'en ai pas", "The Weeknd", "Nekfeu", "Damso"],
    reponseCorrecte: "J'en ai pas",
  },
  {
    question: "Je t'aime comment ?",
    options: ["Au point de sacrifier ma vie", "Fort", "Énormément", "À la folie"],
    reponseCorrecte: "Au point de sacrifier ma vie",
  },
  {
    question: "Je préfère la journée ou la nuit ?",
    options: ["La nuit", "Le matin", "L'après-midi", "La journée"],
    reponseCorrecte: "La nuit",
  },
  {
    question: "Mon temps préféré ?",
    options: ["Temps orageux", "Canicule", "Neige", "Grand soleil"],
    reponseCorrecte: "Temps orageux",
  },
  {
    question: "Notre première rencontre, c'était quand ?",
    options: ["25 mars", "25 février", "14 février", "3 avril"],
    reponseCorrecte: "25 mars",
  },
  {
    question: "Ma ville de naissance ?",
    options: ["Fourmies", "Lille", "Paris", "Valenciennes"],
    reponseCorrecte: "Fourmies",
  },
  {
    question: "Ma passion secrète ?",
    options: ["Les voyages dans le temps", "Le tuning", "Les théories du complot", "Le foot"],
    reponseCorrecte: "Les voyages dans le temps",
  },
  {
    question: "Combien de poésies je t'ai écrites ?",
    options: ["En sah, même moi je sais plus", "2", "5", "10"],
    reponseCorrecte: "En sah, même moi je sais plus",
  },
  {
    question: "Ma couleur préférée ?",
    options: ["Violet", "Rouge", "Noir", "Bleu"],
    reponseCorrecte: "Violet",
  },
  {
    question: "Mon cristal préféré ?",
    options: ["Émeraude", "Saphir", "Rubis", "Améthyste"],
    reponseCorrecte: "Émeraude",
  },
  {
    question: "Ma taille exacte (avant opération) ?",
    options: ["1m82", "1m78", "1m80", "1m85"],
    reponseCorrecte: "1m82",
  },
  {
    question: "Mon plat préféré ?",
    options: ["Couscous", "Tacos", "Lasagnes", "Burger"],
    reponseCorrecte: "Couscous",
  },
  {
    question: "Mon animé préféré ?",
    options: ["Dragon Ball", "Naruto", "One Piece", "Jujutsu Kaisen"],
    reponseCorrecte: "Dragon Ball",
  },
  {
    question: "On s'est mis en couple quand ?",
    options: ["25 février", "25 mars", "14 février", "1 janvier"],
    reponseCorrecte: "25 février",
  },
  {
    question: "Qui m'a sauvé la vie ?",
    options: ["Sabrina Bentakouka", "Sabrina Carpenter", "Sabrina Spellman", "Sabrina Ouazani"],
    reponseCorrecte: "Sabrina Bentakouka",
  },
  {
    question: "Mon fruit préféré ?",
    options: ["Ananas", "Fraise", "Mangue", "Pomme"],
    reponseCorrecte: "Ananas",
  },
  {
    question: "Pierre, feuille ou ciseaux ?",
    options: [
      "Ciseaux, car tu as découpé et volé mon coeur",
      "Pierre parce que je suis solide",
      "Feuille parce que je suis calme",
      "Pierre car je gagne toujours",
    ],
    reponseCorrecte: "Ciseaux, car tu as découpé et volé mon coeur",
  },
  {
    question: "Mon jeu préféré ?",
    options: ["Clair Obscur: Expedition 33", "FIFA", "Fortnite", "Minecraft"],
    reponseCorrecte: "Clair Obscur: Expedition 33",
  },
  {
    question: "J'ai des sentiments pour qui que ce soit d'autre que toi ?",
    options: ["Non", "Oui", "Peut-être", "Je sais pas"],
    reponseCorrecte: "Non",
    special: "chaos-check",
  },
  {
    question: "Qui va te marier ?",
    options: ["Moi", "Moi", "Moi", "Moi"],
    reponseCorrecte: "Moi",
  },
  {
    question: "Ce que je préfère le plus chez toi ?",
    options: ["Tes yeux", "Tes fesses", "Tes pieds", "Ta voix"],
    reponseCorrecte: "Tes yeux",
  },
  {
    question: "Qui sera la reine la plus heureuse de ce monde ?",
    options: ["Sabrina Bentakouka", "Sabrina Bentakouka", "Sabrina Bentakouka", "Sabrina Bentakouka"],
    reponseCorrecte: "Sabrina Bentakouka",
  },
];

const QUIZ_CANDLE_UNLOCK_INDEX = Math.ceil(questions.length * 0.7);

const el = {
  screenHome: document.getElementById("screen-home"),
  screenGame: document.getElementById("screen-game"),
  screenQuiz: document.getElementById("screen-quiz"),
  fade: document.getElementById("fade-overlay"),

  candlesLayer: document.getElementById("candles-layer"),
  candlesStatus: document.getElementById("candles-status"),
  btnStartQuiz: document.getElementById("btn-start-quiz"),
  btnStartKrill: document.getElementById("btn-start-krill"),
  btnSoundMenu: document.getElementById("btn-sound-menu"),
  btnSoundMenuGame: document.getElementById("btn-sound-menu-game"),
  btnSoundMenuQuiz: document.getElementById("btn-sound-menu-quiz"),
  soundPanel: document.getElementById("sound-panel"),
  volumeMusic: document.getElementById("volume-music"),
  volumeSfx: document.getElementById("volume-sfx"),
  musicSelect: document.getElementById("music-select"),
  musicProgress: document.getElementById("music-progress"),
  musicCurrentTime: document.getElementById("music-current-time"),
  musicDuration: document.getElementById("music-duration"),
  btnPlayMusic: document.getElementById("btn-play-music"),

  edenBg: document.querySelector(".eden-bg"),
  arena: document.getElementById("game-arena"),
  avatar: document.getElementById("player-avatar"),
  krillCount: document.getElementById("krill-candles-count"),
  gameOver: document.getElementById("game-over"),
  gameOverImg: document.getElementById("game-over-img"),
  btnRestartGame: document.getElementById("btn-restart-game"),
  gameWin: document.getElementById("game-win"),
  gameWinImg: document.getElementById("game-win-img"),
  gameWinTitle: document.getElementById("game-win-title"),
  gameWinText: document.getElementById("game-win-text"),
  btnWinRestart: document.getElementById("btn-win-restart"),
  btnWinHome: document.getElementById("btn-win-home"),
  btnGameHome: document.getElementById("btn-game-home"),
  gameIntro: document.getElementById("game-intro"),
  btnGameIntroOk: document.getElementById("btn-game-intro-ok"),
  gameCountdown: document.getElementById("game-countdown"),
  countdownValue: document.getElementById("countdown-value"),

  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  questionText: document.getElementById("question-text"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  feedbackImage: document.getElementById("feedback-image"),
  feedbackQuote: document.getElementById("feedback-quote"),
  btnNext: document.getElementById("btn-next"),
  btnQuizHome: document.getElementById("btn-quiz-home"),

  specialConfirm: document.getElementById("special-confirm"),
  btnChangeAnswer: document.getElementById("btn-change-answer"),
  btnConfirmChaos: document.getElementById("btn-confirm-chaos"),

  chaosOverlay: document.getElementById("chaos-overlay"),
  btnApology: document.getElementById("btn-apology"),

  defeatOverlay: document.getElementById("defeat-overlay"),
  btnDefeatRestart: document.getElementById("btn-defeat-restart"),

  midOverlay: document.getElementById("mid-overlay"),
  midImage: document.getElementById("mid-image"),
  btnMidContinue: document.getElementById("btn-mid-continue"),

  finalOverlay: document.getElementById("final-overlay"),
  finalImage: document.getElementById("final-image"),
  btnFinalHome: document.getElementById("btn-final-home"),
  btnRestartQuiz: document.getElementById("btn-restart-quiz"),
};

let sfxAudio = null;
let musicAudio = null;
let musicProgressDragging = false;
let lastGoodIndex = -1;
let lastBadIndex = -1;

const state = {
  home: {
    total: 7,
    lit: 0,
    locked: false,
    krillUnlocked: false,
    candlesUnlocked: false,
  },
  game: {
    running: false,
    over: false,
    phase: "idle",
    startedAt: 0,
    invulnerableUntil: 0,
    rafId: 0,
    width: 0,
    height: 0,
    avatar: { x: 80, y: 160, w: 82, h: 82, speed: 360 },
    dragTouchId: null,
    krills: [],
    krillTimer: null,
    candle: null,
    candleTimer: null,
    countdownTimer: null,
    collected: 0,
    listenersBound: false,
    wins: 0,
  },
  quiz: {
    index: 0,
    wrongCount: 0,
    answerLocked: false,
    midShown: false,
    pendingSpecialWrong: false,
    chaosClicks: 0,
    chaosTarget: 0,
  },
  audio: {
    musicEnabled: true,
    sfxEnabled: true,
    musicVolume: 0.7,
    sfxVolume: 0.8,
    autoPlayed: false,
    currentTrack: "Designe Site/Son du site/Musique/Ma princesse.mp3",
  },
};

function path(p) {
  return encodeURI(p);
}

function readKrillUnlocked() {
  try {
    return localStorage.getItem(STORAGE_KEYS.krillUnlocked) === "true";
  } catch {
    return false;
  }
}

function unlockKrillShortcut() {
  state.home.krillUnlocked = true;
  syncKrillShortcutButton();
}

function syncHomeCandlesVisibility() {
  if (!el.candlesLayer) return;
  el.candlesLayer.classList.toggle("candles-hidden", !state.home.candlesUnlocked);
}

function unlockHomeCandles() {
  if (state.home.candlesUnlocked) return;
  state.home.candlesUnlocked = true;
  syncHomeCandlesVisibility();
}

function syncKrillShortcutButton() {
  if (!el.btnStartKrill) return;
  if (state.home.krillUnlocked) {
    el.btnStartKrill.textContent = "Jeu des krill";
    el.btnStartKrill.classList.remove("disabled-cta");
    return;
  }

  el.btnStartKrill.textContent = "En construction";
  el.btnStartKrill.classList.add("disabled-cta");
}

function playSound(soundPath) {
  if (!state.audio.sfxEnabled) return;
  if (sfxAudio) {
    sfxAudio.pause();
    sfxAudio.currentTime = 0;
  }
  const a = new Audio(path(soundPath));
  a.volume = state.audio.sfxVolume;
  a.play().catch(() => {});
  sfxAudio = a;
}

function stopSfx() {
  if (!sfxAudio) return;
  sfxAudio.pause();
  sfxAudio.currentTime = 0;
  sfxAudio = null;
}

function stopMusic() {
  if (!musicAudio) return;
  musicAudio.pause();
  musicAudio.currentTime = 0;
}

function pauseMusic() {
  if (!musicAudio) return;
  musicAudio.pause();
}

function formatTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const total = Math.floor(sec);
  const min = Math.floor(total / 60);
  const s = total % 60;
  return `${min}:${String(s).padStart(2, "0")}`;
}

function updateMusicProgressUI() {
  if (!el.musicProgress || !el.musicCurrentTime || !el.musicDuration) return;
  if (!musicAudio) {
    el.musicProgress.value = "0";
    el.musicCurrentTime.textContent = "0:00";
    el.musicDuration.textContent = "0:00";
    return;
  }

  const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
  el.musicCurrentTime.textContent = formatTime(musicAudio.currentTime || 0);
  el.musicDuration.textContent = formatTime(duration);

  if (!musicProgressDragging && duration > 0) {
    const pct = (musicAudio.currentTime / duration) * 100;
    el.musicProgress.value = String(Math.max(0, Math.min(100, pct)));
  }
}

function bindMusicAudioEvents() {
  if (!musicAudio) return;
  musicAudio.addEventListener("loadedmetadata", updateMusicProgressUI);
  musicAudio.addEventListener("timeupdate", updateMusicProgressUI);
  musicAudio.addEventListener("play", syncMusicButton);
  musicAudio.addEventListener("pause", syncMusicButton);
  musicAudio.addEventListener("ended", syncMusicButton);
}

function syncMusicButton() {
  if (!musicAudio) {
    el.btnPlayMusic.textContent = "▶ Play";
    return;
  }
  const isPlaying = Boolean(musicAudio && !musicAudio.paused);
  el.btnPlayMusic.textContent = isPlaying ? "⏸ Pause" : "▶ Reprendre";
}

function playSelectedMusic() {
  if (!state.audio.musicEnabled) return;
  stopMusic();
  musicAudio = new Audio(path(state.audio.currentTrack));
  musicAudio.loop = true;
  musicAudio.volume = state.audio.musicVolume;
  bindMusicAudioEvents();
  updateMusicProgressUI();
  musicAudio.play().then(() => {
    syncMusicButton();
    updateMusicProgressUI();
  }).catch(() => {
    syncMusicButton();
    updateMusicProgressUI();
  });
}

function fillMusicList() {
  el.musicSelect.innerHTML = "";
  MEDIA.site.music.forEach((trackPath) => {
    const option = document.createElement("option");
    option.value = trackPath;
    option.textContent = trackPath.split("/").pop().replace(/\.mp3$/i, "");
    el.musicSelect.appendChild(option);
  });
  el.musicSelect.value = state.audio.currentTrack;
  updateMusicProgressUI();
  syncMusicButton();
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickPack(packs, lastIndexRef) {
  if (packs.length === 1) return { index: 0, pack: packs[0] };
  let i = Math.floor(Math.random() * packs.length);
  while (i === lastIndexRef.value) {
    i = Math.floor(Math.random() * packs.length);
  }
  lastIndexRef.value = i;
  return { index: i, pack: packs[i] };
}

function setActiveScreen(name) {
  el.screenHome.classList.remove("active");
  el.screenGame.classList.remove("active");
  el.screenQuiz.classList.remove("active");
  if (name === "home") el.screenHome.classList.add("active");
  if (name === "game") el.screenGame.classList.add("active");
  if (name === "quiz") el.screenQuiz.classList.add("active");
}

function fadeTo(nextFn) {
  el.fade.hidden = false;
  requestAnimationFrame(() => {
    el.fade.classList.add("active");
    setTimeout(() => {
      nextFn();
      setTimeout(() => {
        el.fade.classList.remove("active");
        setTimeout(() => {
          el.fade.hidden = true;
        }, 900);
      }, 120);
    }, 950);
  });
}

function setupSoundPanel() {
  const soundBtns = [el.btnSoundMenu, el.btnSoundMenuGame, el.btnSoundMenuQuiz].filter(Boolean);
  soundBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      el.soundPanel.hidden = !el.soundPanel.hidden;
    });
  });

  document.addEventListener("click", (event) => {
    if (el.soundPanel.hidden) return;
    if (el.soundPanel.contains(event.target)) return;
    if (soundBtns.some((b) => b.contains(event.target))) return;
    el.soundPanel.hidden = true;
  });

  el.volumeMusic.addEventListener("input", () => {
    state.audio.musicVolume = parseFloat(el.volumeMusic.value);
    state.audio.musicEnabled = state.audio.musicVolume > 0;
    if (musicAudio) musicAudio.volume = state.audio.musicVolume;
    if (state.audio.musicEnabled && musicAudio && musicAudio.paused) {
      musicAudio.play().catch(() => {});
    } else if (state.audio.musicEnabled && !musicAudio) {
      playSelectedMusic();
    }
    if (!state.audio.musicEnabled) pauseMusic();
    syncMusicButton();
  });

  el.volumeSfx.addEventListener("input", () => {
    state.audio.sfxVolume = parseFloat(el.volumeSfx.value);
    state.audio.sfxEnabled = state.audio.sfxVolume > 0;
    if (sfxAudio) sfxAudio.volume = state.audio.sfxVolume;
  });

  el.musicSelect.addEventListener("change", () => {
    state.audio.currentTrack = el.musicSelect.value;
    if (state.audio.musicEnabled) playSelectedMusic();
    syncMusicButton();
  });

  el.musicProgress.addEventListener("pointerdown", () => {
    musicProgressDragging = true;
  });

  el.musicProgress.addEventListener("input", () => {
    if (!musicAudio) {
      updateMusicProgressUI();
      return;
    }
    const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
    if (duration <= 0) return;
    const nextTime = (parseFloat(el.musicProgress.value) / 100) * duration;
    musicAudio.currentTime = nextTime;
    updateMusicProgressUI();
  });

  const stopDragging = () => {
    musicProgressDragging = false;
    updateMusicProgressUI();
  };
  el.musicProgress.addEventListener("pointerup", stopDragging);
  el.musicProgress.addEventListener("pointercancel", stopDragging);
  el.musicProgress.addEventListener("blur", stopDragging);

  el.btnPlayMusic.addEventListener("click", () => {
    if (musicAudio && !musicAudio.paused) {
      pauseMusic();
      syncMusicButton();
      return;
    }

    if (musicAudio && musicAudio.paused) {
      musicAudio.play().then(syncMusicButton).catch(syncMusicButton);
      return;
    }

    if (state.audio.musicVolume === 0) {
      state.audio.musicVolume = 0.7;
      el.volumeMusic.value = "0.7";
    }
    state.audio.musicEnabled = true;
    playSelectedMusic();
  });
}

function setupAutoPlay() {
  function firstPlay() {
    if (!state.audio.autoPlayed) {
      state.audio.autoPlayed = true;
      playSelectedMusic();
    }
    document.removeEventListener("click", firstPlay, true);
    document.removeEventListener("touchstart", firstPlay, true);
  }
  document.addEventListener("click", firstPlay, true);
  document.addEventListener("touchstart", firstPlay, true);
}

function setupHome() {
  state.home.krillUnlocked = false;
  state.home.candlesUnlocked = false;
  state.home.lit = 0;
  state.home.locked = false;
  syncKrillShortcutButton();
  syncHomeCandlesVisibility();
  fillMusicList();
  const usedCandleSpots = [];

  function isInNoCandleZone(x, y) {
    return x > 10 && x < 90 && y > 8 && y < 72;
  }

  function getSafeCandleSpot() {
    for (let tries = 0; tries < 80; tries += 1) {
      const x = 4 + Math.random() * 92;
      const y = 10 + Math.random() * 82;
      if (isInNoCandleZone(x, y)) continue;
      const tooClose = usedCandleSpots.some((p) => Math.hypot(p.x - x, p.y - y) < 10.5);
      if (tooClose) continue;
      usedCandleSpots.push({ x, y });
      return { x, y };
    }

    const fallback = { x: 6 + Math.random() * 88, y: 12 + Math.random() * 80 };
    usedCandleSpots.push(fallback);
    return fallback;
  }

  for (let i = 0; i < state.home.total; i += 1) {
    const img = document.createElement("img");
    img.className = "home-candle";
    img.src = path(MEDIA.candles.off);
    img.alt = `Bougie ${i + 1}`;

    const { x, y } = getSafeCandleSpot();
    img.style.left = `${x}%`;
    img.style.top = `${y}%`;

    img.addEventListener("click", () => {
      if (!state.home.candlesUnlocked || img.classList.contains("lit") || state.home.locked) return;
      img.classList.add("lit");
      img.src = path(MEDIA.candles.on);
      playSound(MEDIA.candles.sound);
      state.home.lit += 1;
      if (state.home.lit >= state.home.total) {
        state.home.locked = true;
        unlockKrillShortcut();
        setTimeout(() => {
          fadeTo(startEdenGame);
        }, 380);
      }
    });

    el.candlesLayer.appendChild(img);
  }

  el.btnStartQuiz.addEventListener("click", () => {
    fadeTo(startQuiz);
  });

  el.btnStartKrill.addEventListener("click", () => {
    if (!state.home.krillUnlocked) {
      el.btnStartKrill.textContent = "Bientot disponible";
      setTimeout(syncKrillShortcutButton, 1200);
      return;
    }

    fadeTo(startEdenGame);
  });

  setupSoundPanel();
  setupAutoPlay();

  document.querySelectorAll(".disabled-cta").forEach((btn) => {
    if (btn.id === "btn-start-krill") return;
    btn.addEventListener("click", () => {
      btn.textContent = "Bientot disponible";
      setTimeout(() => {
        btn.textContent = "En construction";
      }, 1200);
    });
  });
}

function startEdenGame() {
  setActiveScreen("game");
  el.edenBg.style.backgroundImage = `url('${path(MEDIA.eden.bg)}')`;
  el.avatar.src = path(MEDIA.eden.avatar);
  el.gameOverImg.src = path(MEDIA.eden.dead);
  resetGameSession();
  syncGameBounds();
  syncAvatarSize();
  resetAvatarPosition();
  addGameListeners();
  el.gameIntro.hidden = false;
}

function resetGameSession() {
  cancelAnimationFrame(state.game.rafId);
  clearTimeout(state.game.krillTimer);
  clearTimeout(state.game.candleTimer);
  clearTimeout(state.game.countdownTimer);
  state.game.rafId = 0;
  state.game.krillTimer = null;
  state.game.candleTimer = null;
  state.game.countdownTimer = null;
  state.game.phase = "intro";
  state.game.collected = 0;
  state.game.over = false;
  state.game.running = false;
  state.game.startedAt = 0;
  state.game.invulnerableUntil = 0;
  state.game.krills = [];
  state.game.candle = null;
  state.game.dragTouchId = null;
  el.krillCount.textContent = "Bougies: 0 / 20";
  el.gameOver.hidden = true;
  el.gameWin.hidden = true;
  el.gameIntro.hidden = true;
  el.gameCountdown.hidden = true;
  el.specialConfirm.hidden = true;
  el.chaosOverlay.hidden = true;
  document.body.classList.remove("preshake", "chaos-mode");
  clearArenaEntities();
}

function beginGameCountdown() {
  resetGameSession();
  state.game.phase = "countdown";
  syncGameBounds();
  syncAvatarSize();
  resetAvatarPosition();
  el.gameCountdown.hidden = false;
  let remaining = 3;
  el.countdownValue.textContent = String(remaining);

  const tick = () => {
    if (remaining <= 1) {
      el.countdownValue.textContent = "GO";
      state.game.countdownTimer = setTimeout(() => {
        el.gameCountdown.hidden = true;
        launchGameRound();
      }, 700);
      return;
    }

    remaining -= 1;
    el.countdownValue.textContent = String(remaining);
    state.game.countdownTimer = setTimeout(tick, 1000);
  };

  state.game.countdownTimer = setTimeout(tick, 1000);
}

function launchGameRound() {
  resetGameSession();
  state.game.phase = "running";
  state.game.over = false;
  state.game.running = true;
  state.game.startedAt = performance.now();
  state.game.invulnerableUntil = state.game.startedAt + 4500;
  syncGameBounds();
  syncAvatarSize();
  resetAvatarPosition();
  scheduleKrillSpawn(true);
  scheduleCandleSpawn();
  loopGame(performance.now());
}

function clearArenaEntities() {
  el.arena.querySelectorAll(".krill, .orange-candle").forEach((node) => node.remove());
  state.game.candle = null;
}

function resetAvatarPosition() {
  state.game.avatar.x = 42;
  state.game.avatar.y = Math.max(28, Math.min(state.game.height / 2 - state.game.avatar.h / 2, state.game.height - state.game.avatar.h - 28));
  renderAvatar();
}

function syncGameBounds() {
  const rect = el.arena.getBoundingClientRect();
  state.game.width = rect.width;
  state.game.height = rect.height;
}

function syncAvatarSize() {
  const rect = el.avatar.getBoundingClientRect();
  if (rect.width > 0) state.game.avatar.w = rect.width;
  if (rect.height > 0) state.game.avatar.h = rect.height;
}

function renderAvatar() {
  el.avatar.style.left = `${state.game.avatar.x}px`;
  el.avatar.style.top = `${state.game.avatar.y}px`;
}

function clampAvatar() {
  const maxX = state.game.width - state.game.avatar.w;
  const maxY = state.game.height - state.game.avatar.h;
  state.game.avatar.x = Math.max(0, Math.min(state.game.avatar.x, maxX));
  state.game.avatar.y = Math.max(0, Math.min(state.game.avatar.y, maxY));
}

function addGameListeners() {
  if (state.game.listenersBound) return;
  state.game.listenersBound = true;

  window.addEventListener("resize", syncGameBounds);

  el.avatar.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    playSound(randomFrom(MEDIA.eden.honks));
  });

  el.arena.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    playSound(randomFrom(MEDIA.eden.honks));
  });

  el.avatar.addEventListener("click", () => {
    playSound(randomFrom(MEDIA.eden.honks));
  });

  el.arena.addEventListener("pointerdown", (e) => {
    if (!state.game.running) return;
    if (e.pointerType === "touch") {
      state.game.dragTouchId = e.pointerId;
      moveAvatarToPointer(e);
      e.preventDefault();
    }
  });

  el.arena.addEventListener("pointermove", (e) => {
    if (!state.game.running) return;
    if (e.pointerType === "mouse") {
      moveAvatarToPointer(e);
      return;
    }
    if (e.pointerType === "touch" && state.game.dragTouchId === e.pointerId) {
      moveAvatarToPointer(e);
      e.preventDefault();
    }
  });

  el.arena.addEventListener("pointerup", (e) => {
    if (state.game.dragTouchId === e.pointerId) {
      state.game.dragTouchId = null;
    }
  });

  el.arena.addEventListener("pointercancel", (e) => {
    if (state.game.dragTouchId === e.pointerId) {
      state.game.dragTouchId = null;
    }
  });

  el.btnRestartGame.addEventListener("click", () => {
    if (!state.game.over) return;
    startEdenGame();
  });

  el.btnWinRestart.addEventListener("click", () => {
    if (state.game.phase !== "won") return;
    startEdenGame();
  });

  el.btnWinHome.addEventListener("click", () => {
    if (state.game.phase !== "won") return;
    returnToMenu();
  });

  el.btnGameIntroOk.addEventListener("click", () => {
    if (state.game.phase !== "intro") return;
    el.gameIntro.hidden = true;
    beginGameCountdown();
  });

  el.btnGameHome.addEventListener("click", returnToMenu);
}

function moveAvatarToPointer(e) {
  const rect = el.arena.getBoundingClientRect();
  state.game.avatar.x = e.clientX - rect.left - state.game.avatar.w / 2;
  state.game.avatar.y = e.clientY - rect.top - state.game.avatar.h / 2;
  clampAvatar();
  renderAvatar();
}

function scheduleKrillSpawn(isFirstWave = false) {
  clearTimeout(state.game.krillTimer);
  if (!state.game.running) return;
  const delay = isFirstWave ? 1400 : 900 + Math.random() * 900;
  state.game.krillTimer = setTimeout(() => {
    spawnKrill();
    scheduleKrillSpawn();
  }, delay);
}

function spawnKrill() {
  if (!state.game.running) return;
  const krill = document.createElement("img");
  krill.className = "krill";
  const fromRight = Math.random() > 0.5;
  krill.src = path(fromRight ? MEDIA.eden.krillRight : MEDIA.eden.krillLeft);

  const laneMax = Math.max(40, state.game.height - 130);
  let y = Math.random() * laneMax;
  const inEarlyGrace = performance.now() < state.game.startedAt + 5500;
  if (inEarlyGrace) {
    const avatarCenterY = state.game.avatar.y + state.game.avatar.h / 2;
    let retries = 0;
    while (Math.abs(y - avatarCenterY) < 220 && retries < 18) {
      y = Math.random() * laneMax;
      retries += 1;
    }
    if (Math.abs(y - avatarCenterY) < 220) {
      y = avatarCenterY < state.game.height / 2 ? laneMax : 0;
    }
  }

  const speed = 130 + Math.random() * 120;
  const width = 110;
  const height = 74;
  const x = fromRight ? state.game.width + width : -width;
  const vx = fromRight ? -speed : speed;

  const entity = { el: krill, x, y, vx, w: width, h: height };
  state.game.krills.push(entity);
  el.arena.appendChild(krill);
  renderKrill(entity);
}

function renderKrill(k) {
  k.el.style.left = `${k.x}px`;
  k.el.style.top = `${k.y}px`;
}

function scheduleCandleSpawn() {
  clearTimeout(state.game.candleTimer);
  if (!state.game.running) return;
  const delay = 1500 + Math.random() * 2500;
  state.game.candleTimer = setTimeout(() => {
    if (!state.game.candle) spawnOrangeCandle();
    scheduleCandleSpawn();
  }, delay);
}

function spawnOrangeCandle() {
  const c = document.createElement("img");
  c.className = "orange-candle";
  c.src = path(MEDIA.eden.orangeCandle);
  const x = Math.random() * Math.max(30, state.game.width - 90);
  const y = Math.random() * Math.max(30, state.game.height - 100);
  const entity = { el: c, x, y, w: 56, h: 56 };
  state.game.candle = entity;
  c.style.left = `${x}px`;
  c.style.top = `${y}px`;
  el.arena.appendChild(c);
}

function loopGame(lastTs) {
  if (!state.game.running) return;
  const step = (now) => {
    if (!state.game.running) return;
    const dt = Math.min(0.05, (now - lastTs) / 1000);
    lastTs = now;
    updateAvatar(dt);
    updateKrills(dt, now);
    checkCandleCollection();
    state.game.rafId = requestAnimationFrame(step);
  };
  state.game.rafId = requestAnimationFrame(step);
}

function updateAvatar(dt) {
  clampAvatar();
  renderAvatar();
}

function updateKrills(dt, now) {
  const a = getAvatarHitbox();
  for (let i = state.game.krills.length - 1; i >= 0; i -= 1) {
    const k = state.game.krills[i];
    k.x += k.vx * dt;
    renderKrill(k);

    const krillHitbox = getKrillHitbox(k);

    if (now >= state.game.invulnerableUntil && intersect(a.x, a.y, a.w, a.h, krillHitbox.x, krillHitbox.y, krillHitbox.w, krillHitbox.h)) {
      return gameOver();
    }

    if (k.x < -220 || k.x > state.game.width + 220) {
      k.el.remove();
      state.game.krills.splice(i, 1);
    }
  }
}

function checkCandleCollection() {
  const c = state.game.candle;
  if (!c) return;
  const a = state.game.avatar;
  if (intersect(a.x, a.y, a.w, a.h, c.x, c.y, c.w, c.h)) {
    c.el.remove();
    state.game.candle = null;
    state.game.collected += 1;
    el.krillCount.textContent = `Bougies: ${state.game.collected} / 20`;
    if (state.game.collected >= 20) {
      winGame();
    }
  }
}

function getAvatarHitbox() {
  const insetX = state.game.avatar.w * 0.24;
  const insetY = state.game.avatar.h * 0.2;
  return {
    x: state.game.avatar.x + insetX,
    y: state.game.avatar.y + insetY,
    w: state.game.avatar.w - insetX * 2,
    h: state.game.avatar.h - insetY * 2,
  };
}

function getKrillHitbox(krill) {
  const insetX = krill.w * 0.26;
  const insetY = krill.h * 0.22;
  return {
    x: krill.x + insetX,
    y: krill.y + insetY,
    w: krill.w - insetX * 2,
    h: krill.h - insetY * 2,
  };
}

function intersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
}

function gameOver() {
  if (!state.game.running) return;
  state.game.running = false;
  state.game.over = true;
  state.game.phase = "game-over";
  cancelAnimationFrame(state.game.rafId);
  clearTimeout(state.game.krillTimer);
  clearTimeout(state.game.candleTimer);
  clearTimeout(state.game.countdownTimer);
  playSound(MEDIA.eden.gameOverSound);
  el.gameOver.hidden = false;
}

function winGame() {
  state.game.running = false;
  state.game.phase = "won";
  cancelAnimationFrame(state.game.rafId);
  clearTimeout(state.game.krillTimer);
  clearTimeout(state.game.candleTimer);
  clearTimeout(state.game.countdownTimer);
  state.game.wins += 1;

  if (state.game.wins === 1) {
    el.gameWinTitle.textContent = "Victoire";
    el.gameWinText.textContent = "Felicitation tu a gagne le droit de me demander un IAP de ton choix";
    el.gameWinImg.src = path(MEDIA.eden.winGift);
  } else {
    el.gameWinTitle.textContent = "Encore ?";
    el.gameWinText.textContent = "Abuse pas , t'aura qu'un IAP";
    el.gameWinImg.src = path(MEDIA.eden.winWarn);
  }

  el.gameWin.hidden = false;
}

function startQuiz() {
  setActiveScreen("quiz");
  resetQuiz();
  renderQuestion();
}

function resetQuiz() {
  state.quiz.index = 0;
  state.quiz.wrongCount = 0;
  state.quiz.answerLocked = false;
  state.quiz.midShown = false;
  state.quiz.pendingSpecialWrong = false;
  state.quiz.chaosClicks = 0;
  state.quiz.chaosTarget = 0;
  hideFeedback();
  el.finalOverlay.hidden = true;
  el.midOverlay.hidden = true;
  el.defeatOverlay.hidden = true;
  document.body.classList.remove("preshake", "chaos-mode");
}

function updateProgress() {
  const total = questions.length;
  const current = Math.min(state.quiz.index + 1, total);
  const pct = Math.min(100, (state.quiz.index / total) * 100);
  el.progressFill.style.width = `${pct}%`;
  el.progressText.textContent = `Question ${current} / ${total}`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderQuestion() {
  if (state.quiz.index >= questions.length) {
    return showFinal();
  }

  if (!state.quiz.midShown && state.quiz.index === 12) {
    state.quiz.midShown = true;
    showMidCheckpoint();
    return;
  }

  updateProgress();
  hideFeedback();

  const q = questions[state.quiz.index];
  el.questionText.textContent = q.question;
  el.options.innerHTML = "";

  shuffle(q.options).forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "big-cta";
    btn.textContent = opt;
    btn.addEventListener("click", () => onAnswer(opt));
    el.options.appendChild(btn);
  });
}

function hideFeedback() {
  el.feedback.hidden = true;
  el.feedback.classList.remove("impact");
  el.feedbackImage.hidden = false;
}

function showFeedback(pack, quote) {
  el.feedback.hidden = false;
  el.feedbackImage.hidden = false;
  el.feedbackImage.src = path(pack.image);
  el.feedbackQuote.textContent = quote;
  el.feedback.classList.add("impact");
  playSound(pack.sound);
}

function onAnswer(answer) {
  if (state.quiz.answerLocked) return;
  const q = questions[state.quiz.index];

  if (q.special === "chaos-check" && answer !== q.reponseCorrecte) {
    handleSpecialWrong();
    return;
  }

  if (answer === q.reponseCorrecte) {
    state.quiz.answerLocked = true;
    const chosen = pickPack(MEDIA.quiz.good, { get value() { return lastGoodIndex; }, set value(v) { lastGoodIndex = v; } });
    showFeedback(chosen.pack, randomFrom(QUOTES_GOOD));
    return;
  }

  if (registerWrong()) return;
  state.quiz.answerLocked = true;
  const chosen = pickPack(MEDIA.quiz.bad, { get value() { return lastBadIndex; }, set value(v) { lastBadIndex = v; } });
  showFeedback(chosen.pack, randomFrom(QUOTES_BAD));
}

function registerWrong() {
  state.quiz.wrongCount += 1;
  if (state.quiz.wrongCount >= 5) {
    showDefeatOverlay();
    return true;
  }
  return false;
}

function handleSpecialWrong() {
  if (registerWrong()) return;
  state.quiz.pendingSpecialWrong = true;
  state.quiz.answerLocked = true;
  document.body.classList.add("preshake");
  el.feedback.hidden = false;
  el.feedbackImage.hidden = true;
  el.feedbackImage.removeAttribute("src");
  el.feedbackQuote.textContent = "Mauvaise reponse detectee...";
  el.feedback.classList.remove("impact");
  el.specialConfirm.hidden = false;
}

function showDefeatOverlay() {
  el.defeatOverlay.hidden = false;
  document.body.classList.remove("preshake", "chaos-mode");
  state.quiz.answerLocked = true;
}

function showMidCheckpoint() {
  el.midImage.src = path(MEDIA.quiz.middle.image);
  playSound(MEDIA.quiz.middle.sound);
  el.midOverlay.hidden = false;
}

function showFinal() {
  el.progressFill.style.width = "100%";
  el.progressText.textContent = `Question ${questions.length} / ${questions.length}`;
  el.finalImage.src = path(MEDIA.quiz.final.image);
  playSound(MEDIA.quiz.final.sound);
  el.finalOverlay.hidden = false;
}

function nextQuestion() {
  state.quiz.index += 1;
  if (state.quiz.index >= QUIZ_CANDLE_UNLOCK_INDEX) {
    unlockHomeCandles();
  }
  state.quiz.answerLocked = false;
  renderQuestion();
}

el.btnNext.addEventListener("click", () => {
  if (!state.quiz.answerLocked) return;
  hideFeedback();
  nextQuestion();
});


function returnToMenu() {
  stopSfx();
  cancelAnimationFrame(state.game.rafId);
  clearTimeout(state.game.krillTimer);
  clearTimeout(state.game.candleTimer);
  clearTimeout(state.game.countdownTimer);
  state.game.running = false;
  state.game.over = false;
  state.game.phase = "idle";
  state.game.dragTouchId = null;
  el.gameOver.hidden = true;
  el.gameWin.hidden = true;
  el.gameIntro.hidden = true;
  el.gameCountdown.hidden = true;
  el.specialConfirm.hidden = true;
  el.chaosOverlay.hidden = true;
  el.defeatOverlay.hidden = true;
  el.midOverlay.hidden = true;
  el.finalOverlay.hidden = true;
  document.body.classList.remove("preshake", "chaos-mode");
  hideFeedback();
  setActiveScreen("home");
}

el.btnQuizHome.addEventListener("click", returnToMenu);
el.btnFinalHome.addEventListener("click", returnToMenu);
el.btnChangeAnswer.addEventListener("click", () => {
  el.specialConfirm.hidden = true;
  document.body.classList.remove("preshake");
  state.quiz.pendingSpecialWrong = false;
  state.quiz.answerLocked = false;
  hideFeedback();
});

el.btnConfirmChaos.addEventListener("click", () => {
  el.specialConfirm.hidden = true;
  document.body.classList.remove("preshake");
  launchChaosMode();
});

function launchChaosMode() {
  state.quiz.chaosClicks = 0;
  state.quiz.chaosTarget = 16 + Math.floor(Math.random() * 18);
  el.btnApology.style.transform = "scale(1)";
  document.body.classList.add("chaos-mode");
  el.chaosOverlay.hidden = false;
}

el.btnApology.addEventListener("click", () => {
  state.quiz.chaosClicks += 1;
  const scale = Math.min(2.8, 1 + state.quiz.chaosClicks * 0.06);
  el.btnApology.style.transform = `scale(${scale})`;

  // Son "Je suis désolé" à chaque clic
  playSound("image et son pour le questionnaire/Je suis désolé/Je suis désolé.mp3");

  if (state.quiz.chaosClicks >= state.quiz.chaosTarget) {
    el.chaosOverlay.hidden = true;
    document.body.classList.remove("chaos-mode");
    state.quiz.pendingSpecialWrong = false;
    hideFeedback();
    nextQuestion();
  }
});

el.btnDefeatRestart.addEventListener("click", () => {
  el.defeatOverlay.hidden = true;
  resetQuiz();
  renderQuestion();
});

el.btnMidContinue.addEventListener("click", () => {
  el.midOverlay.hidden = true;
  renderQuestion();
});

el.btnRestartQuiz.addEventListener("click", () => {
  el.finalOverlay.hidden = true;
  resetQuiz();
  renderQuestion();
});

setupHome();
setActiveScreen("home");
