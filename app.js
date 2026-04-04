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
      "musique/Lud.mp3",
      "musique/Ma princesse.mp3",
      "musique/Mon diamant.mp3",
      "musique/Prison de sable.mp3",
      "musique/Rouhi ❤️.mp3",
      "musique/Sab.mp3",
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
  playlists: "sabsab.playlists",
  theme: "sabsab.theme",
  nickname: "sabsab.nickname",
  clientId: "sabsab.clientId",
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
  screenMusic: document.getElementById("screen-music"),
  fade: document.getElementById("fade-overlay"),

  candlesLayer: document.getElementById("candles-layer"),
  candlesStatus: document.getElementById("candles-status"),
  homeHeader: document.querySelector(".home-header"),
  homeMain: document.querySelector(".home-main"),
  btnStartQuiz: document.getElementById("btn-start-quiz"),
  btnStartKrill: document.getElementById("btn-start-krill"),
  btnStartMusic: document.getElementById("btn-start-music"),
  btnSoundMenu: document.getElementById("btn-sound-menu"),
  btnSoundMenuGame: document.getElementById("btn-sound-menu-game"),
  btnSoundMenuQuiz: document.getElementById("btn-sound-menu-quiz"),
  btnSoundMenuMusic: document.getElementById("btn-sound-menu-music"),
  themeToggles: Array.from(document.querySelectorAll("[data-theme-toggle]")),
  onlineTriggers: Array.from(document.querySelectorAll("[data-online-trigger]")),
  soundPanel: document.getElementById("sound-panel"),
  onlinePanel: document.getElementById("online-panel"),
  onlineStatus: document.getElementById("online-status"),
  onlineCount: document.getElementById("online-count"),
  onlineUsersList: document.getElementById("online-users-list"),
  btnChangeNickname: document.getElementById("btn-change-nickname"),
  nicknameModal: document.getElementById("nickname-modal"),
  nicknameInput: document.getElementById("nickname-input"),
  btnSaveNickname: document.getElementById("btn-save-nickname"),
  btnToggleMute: document.getElementById("btn-toggle-mute"),
  volumeMusic: document.getElementById("volume-music"),
  volumeSfx: document.getElementById("volume-sfx"),
  musicSelect: document.getElementById("music-select"),
  musicProgress: document.getElementById("music-progress"),
  musicProgressFill: document.getElementById("music-progress-fill"),
  musicProgressThumb: document.getElementById("music-progress-thumb"),
  musicCurrentTime: document.getElementById("music-current-time"),
  musicDuration: document.getElementById("music-duration"),  musicNowTitle: document.getElementById("music-now-title"),
  musicNowContext: document.getElementById("music-now-context"),
  musicSourceBadge: document.getElementById("music-source-badge"),
  musicListLabel: document.getElementById("music-list-label"),
  btnMusicLibraryHome: document.getElementById("btn-music-library-home"),
  btnPlayMusic: document.getElementById("btn-play-music"),
  btnPrevTrack: document.getElementById("btn-prev-track"),
  btnNextTrack: document.getElementById("btn-next-track"),
  btnModeSequential: document.getElementById("btn-mode-sequential"),
  btnModeRepeatAll: document.getElementById("btn-mode-repeat-all"),
  btnModeRepeatOne: document.getElementById("btn-mode-repeat-one"),
  btnModeShuffle: document.getElementById("btn-mode-shuffle"),
  playlistStatus: document.getElementById("playlist-status"),
  playlistsColumn: document.getElementById("playlists-column"),
  btnOpenCreatePlaylist: document.getElementById("btn-open-create-playlist"),
  playlistModal: document.getElementById("playlist-modal"),
  playlistModalName: document.getElementById("playlist-modal-name"),
  btnSavePlaylist: document.getElementById("btn-save-playlist"),
  btnCancelPlaylist: document.getElementById("btn-cancel-playlist"),
  playlistAddModal: document.getElementById("playlist-add-modal"),
  playlistAddTitle: document.getElementById("playlist-add-title"),
  playlistTrackOptions: document.getElementById("playlist-track-options"),
  btnConfirmAddToPlaylist: document.getElementById("btn-confirm-add-to-playlist"),
  btnCancelAddToPlaylist: document.getElementById("btn-cancel-add-to-playlist"),
  btnMusicHome: document.getElementById("btn-music-home"),

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

const DEFAULT_TRACK = MEDIA.site.music[0] || "";
const PLAYER_MODES = {
  sequential: "sequential",
  repeatAll: "repeat-all",
  repeatOne: "repeat-one",
  shuffle: "shuffle",
};

function readSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEYS.theme) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function sanitizeNickname(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 20);
}

function readSavedNickname() {
  try {
    return sanitizeNickname(localStorage.getItem(STORAGE_KEYS.nickname));
  } catch {
    return "";
  }
}

function saveNicknamePreference(nickname) {
  try {
    localStorage.setItem(STORAGE_KEYS.nickname, nickname);
  } catch {
    // ignore storage errors on private browsing or restricted devices
  }
}

function readOrCreateClientId() {
  try {
    const existing = localStorage.getItem(STORAGE_KEYS.clientId);
    if (existing) return existing;

    const generatedId = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

    localStorage.setItem(STORAGE_KEYS.clientId, generatedId);
    return generatedId;
  } catch {
    return `client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }
}

function saveThemePreference() {
  try {
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  } catch {
    // ignore storage errors on private browsing or restricted devices
  }
}

function getPresenceBaseUrl() {
  const configuredUrl = typeof window !== "undefined" && typeof window.SABSAB_PRESENCE_URL === "string"
    ? window.SABSAB_PRESENCE_URL.trim()
    : "";

  if (configuredUrl) {
    return configuredUrl.replace(/\/+$/, "");
  }

  return window.location.origin;
}

const state = {
  theme: readSavedTheme(),
  presence: {
    nickname: readSavedNickname(),
    clientId: readOrCreateClientId(),
    users: [],
    connected: false,
    stream: null,
  },
  home: {
    total: 7,
    lit: 0,
    locked: false,
    krillUnlocked: true,
    candlesUnlocked: true,
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
    musicStarted: false,
    mutedAll: false,
    wasPlayingBeforeMute: false,
    pendingPlaylistName: "",
    collapsedPlaylists: {},
    currentTrack: DEFAULT_TRACK,
    activeQueue: "library",
    playerMode: PLAYER_MODES.repeatAll,
    playlists: readSavedPlaylists(),
  },
};

function path(p) {
  return encodeURI(p);
}

function normalizeMusicTrackPath(trackPath) {
  if (typeof trackPath !== "string") return "";
  if (MEDIA.site.music.includes(trackPath)) return trackPath;

  const legacyPrefix = "Designe Site/Son du site/Musique/";
  if (trackPath.startsWith(legacyPrefix)) {
    return `musique/${trackPath.split("/").pop()}`;
  }

  return trackPath;
}

function readSavedPlaylists() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.playlists);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

    const cleaned = {};
    Object.entries(parsed).forEach(([name, tracks]) => {
      if (typeof name !== "string" || !Array.isArray(tracks)) return;
      const validTracks = tracks
        .map(normalizeMusicTrackPath)
        .filter((track) => MEDIA.site.music.includes(track));
      cleaned[name] = [...new Set(validTracks)];
    });
    return cleaned;
  } catch {
    return {};
  }
}

function savePlaylists() {
  try {
    localStorage.setItem(STORAGE_KEYS.playlists, JSON.stringify(state.audio.playlists));
  } catch {
    // ignore storage errors on private browsing or restricted devices
  }
}

function saveThemePreference() {
  try {
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  } catch {
    // ignore storage errors on private browsing or restricted devices
  }
}

async function loadMusicLibrary() {
  try {
    const response = await fetch(`music-manifest.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;

    const tracks = await response.json();
    if (!Array.isArray(tracks) || !tracks.length) return;

    const cleanedTracks = tracks
      .filter((track) => typeof track === "string")
      .map(normalizeMusicTrackPath);

    if (!cleanedTracks.length) return;
    MEDIA.site.music = [...new Set(cleanedTracks)];

    if (!MEDIA.site.music.includes(state.audio.currentTrack)) {
      state.audio.currentTrack = MEDIA.site.music[0];
    }
  } catch {
    // keep fallback music list when the manifest is unavailable
  }
}

function getTrackLabel(trackPath) {
  return trackPath.split("/").pop().replace(/\.(mp3|m4a|wav|ogg)$/i, "");
}

function setCandlesMessage(message) {
  if (!el.candlesStatus) return;
  el.candlesStatus.textContent = message;
  el.candlesStatus.style.display = message ? "block" : "none";
}

function readKrillUnlocked() {
  return true;
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

function getActivePlaylistTracks() {
  if (state.audio.activeQueue === "library") return [];
  return state.audio.playlists[state.audio.activeQueue] || [];
}

function getQueueTracks() {
  if (state.audio.activeQueue === "library") return [...MEDIA.site.music];
  return [...getActivePlaylistTracks()];
}

function getPlayableQueue() {
  if (state.audio.activeQueue === "library") {
    return [...MEDIA.site.music];
  }

  return [...getActivePlaylistTracks()];
}

function updatePlaylistStatus(message) {
  if (!el.playlistStatus) return;
  el.playlistStatus.textContent = message;
}

function applyTheme(themeName = state.theme) {
  const nextTheme = themeName === "dark" ? "dark" : "light";
  state.theme = nextTheme;
  document.body.dataset.theme = nextTheme;

  if (Array.isArray(el.themeToggles)) {
    const isDark = nextTheme === "dark";
    el.themeToggles.forEach((toggle) => {
      toggle.checked = isDark;
      toggle.setAttribute("aria-checked", String(isDark));
    });
  }
}

function toggleTheme(forceTheme) {
  const nextTheme = forceTheme === "dark" || forceTheme === "light"
    ? forceTheme
    : state.theme === "dark"
      ? "light"
      : "dark";

  applyTheme(nextTheme);
  saveThemePreference();
}

function updateOnlinePanel() {
  if (!el.onlineStatus || !el.onlineCount || !el.onlineUsersList) return;

  const uniqueUsers = [...new Set((state.presence.users || [])
    .map(sanitizeNickname)
    .filter(Boolean))];

  const count = uniqueUsers.length;
  el.onlineCount.textContent = `${count} connecté${count > 1 ? "s" : ""}`;

  if (!state.presence.nickname) {
    el.onlineStatus.textContent = "Choisis ton pseudo pour apparaître en direct.";
  } else if (state.presence.connected) {
    el.onlineStatus.textContent = `Connecté en direct en tant que ${state.presence.nickname}.`;
  } else {
    el.onlineStatus.textContent = `Connexion en cours pour ${state.presence.nickname}...`;
  }

  el.onlineUsersList.innerHTML = "";

  if (!uniqueUsers.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "online-empty";
    emptyItem.textContent = "Personne en ligne pour l'instant.";
    el.onlineUsersList.appendChild(emptyItem);
  } else {
    uniqueUsers.forEach((userName) => {
      const item = document.createElement("li");
      item.className = "online-user-item";
      if (userName === state.presence.nickname) {
        item.classList.add("online-user-you");
      }

      const dot = document.createElement("span");
      dot.className = "online-user-dot";

      const name = document.createElement("span");
      name.textContent = userName === state.presence.nickname ? `${userName} (toi)` : userName;

      item.append(dot, name);
      el.onlineUsersList.appendChild(item);
    });
  }

  if (Array.isArray(el.onlineTriggers)) {
    el.onlineTriggers.forEach((button) => {
      button.classList.toggle("is-live", count > 0);
      button.title = count > 0 ? `${count} personne(s) en ligne` : "Voir les personnes connectées";
    });
  }
}

function openNicknameModal(prefillCurrent = true) {
  if (!el.nicknameModal || !el.nicknameInput) return;
  el.nicknameModal.hidden = false;
  el.nicknameInput.value = prefillCurrent ? state.presence.nickname : "";
  requestAnimationFrame(() => {
    el.nicknameInput.focus();
    el.nicknameInput.select();
  });
}

function closeNicknameModal() {
  if (!el.nicknameModal) return;
  el.nicknameModal.hidden = true;
}

function saveNicknameAndConnect() {
  if (!el.nicknameInput) return;
  const nickname = sanitizeNickname(el.nicknameInput.value);
  if (!nickname) {
    el.nicknameInput.focus();
    return;
  }

  state.presence.nickname = nickname;
  saveNicknamePreference(nickname);
  closeNicknameModal();
  connectPresenceStream();
  updateOnlinePanel();
}

function connectPresenceStream() {
  if (!state.presence.nickname || typeof EventSource === "undefined") {
    state.presence.connected = false;
    updateOnlinePanel();
    return;
  }

  if (state.presence.stream) {
    state.presence.stream.close();
  }

  const presenceBaseUrl = getPresenceBaseUrl();
  const presenceUrl = `${presenceBaseUrl}/__presence?name=${encodeURIComponent(state.presence.nickname)}&clientId=${encodeURIComponent(state.presence.clientId)}`;
  const stream = new EventSource(presenceUrl);
  state.presence.stream = stream;

  stream.onopen = () => {
    state.presence.connected = true;
    updateOnlinePanel();
  };

  stream.onmessage = (event) => {
    try {
      const payload = JSON.parse(event.data);
      if (payload.type !== "presence") return;
      state.presence.users = Array.isArray(payload.users) ? payload.users : [];
      state.presence.connected = true;
      updateOnlinePanel();
    } catch {
      // ignore malformed presence payloads
    }
  };

  stream.onerror = () => {
    state.presence.connected = false;
    updateOnlinePanel();
  };
}

function setupThemeToggles() {
  if (!Array.isArray(el.themeToggles) || !el.themeToggles.length) return;
  el.themeToggles.forEach((toggle) => {
    toggle.checked = state.theme === "dark";
    toggle.addEventListener("change", () => {
      toggleTheme(toggle.checked ? "dark" : "light");
    });
  });
}

function setupPresence() {
  if (Array.isArray(el.onlineTriggers)) {
    el.onlineTriggers.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!state.presence.nickname) {
          openNicknameModal(false);
          return;
        }

        if (el.onlinePanel) {
          el.onlinePanel.hidden = !el.onlinePanel.hidden;
        }
        if (el.soundPanel && !el.onlinePanel.hidden) {
          el.soundPanel.hidden = true;
        }
        updateOnlinePanel();
      });
    });
  }

  if (el.btnChangeNickname) {
    el.btnChangeNickname.addEventListener("click", (event) => {
      event.preventDefault();
      if (el.onlinePanel) {
        el.onlinePanel.hidden = true;
      }
      openNicknameModal(true);
    });
  }

  if (el.btnSaveNickname) {
    el.btnSaveNickname.addEventListener("click", saveNicknameAndConnect);
  }

  if (el.nicknameInput) {
    el.nicknameInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      saveNicknameAndConnect();
    });
  }

  updateOnlinePanel();

  if (state.presence.nickname) {
    connectPresenceStream();
  } else {
    openNicknameModal(false);
  }

  window.addEventListener("beforeunload", () => {
    if (state.presence.stream) {
      state.presence.stream.close();
    }
  });
}

function updateMuteButton() {
  if (!el.btnToggleMute) return;
  const label = state.audio.mutedAll ? "🔇 Mode muet : activé" : "🔇 Mode muet : désactivé";
  el.btnToggleMute.textContent = label;
  el.btnToggleMute.classList.toggle("is-muted", state.audio.mutedAll);
}

function toggleMuteAll(forceValue) {
  const nextMutedValue = typeof forceValue === "boolean" ? forceValue : !state.audio.mutedAll;
  if (state.audio.mutedAll === nextMutedValue) {
    updateMuteButton();
    return;
  }

  state.audio.mutedAll = nextMutedValue;

  if (nextMutedValue) {
    state.audio.wasPlayingBeforeMute = Boolean(musicAudio && !musicAudio.paused);
    state.audio.musicEnabled = false;
    state.audio.sfxEnabled = false;
    stopSfx();
    pauseMusic();
  } else {
    state.audio.musicEnabled = state.audio.musicVolume > 0;
    state.audio.sfxEnabled = state.audio.sfxVolume > 0;
    if (state.audio.wasPlayingBeforeMute && state.audio.musicStarted && state.audio.musicEnabled && musicAudio) {
      musicAudio.play().catch(() => {});
    }
    state.audio.wasPlayingBeforeMute = false;
  }

  updateMuteButton();
  syncMusicButton();
}

function setMusicProgressPercent(percent) {
  const safePercent = Math.max(0, Math.min(100, percent || 0));
  if (el.musicProgressFill) {
    el.musicProgressFill.style.width = `${safePercent}%`;
  }
  if (el.musicProgressThumb) {
    el.musicProgressThumb.style.left = `${safePercent}%`;
  }
  if (el.musicProgress) {
    el.musicProgress.setAttribute("aria-valuenow", String(safePercent.toFixed(1)));
  }
}

function updateMusicProgressUI() {
  if (!el.musicProgress || !el.musicCurrentTime || !el.musicDuration) return;
  if (!musicAudio) {
    setMusicProgressPercent(0);
    el.musicCurrentTime.textContent = "0:00";
    el.musicDuration.textContent = "0:00";
    return;
  }

  const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
  const currentTime = Number.isFinite(musicAudio.currentTime) ? musicAudio.currentTime : 0;
  el.musicCurrentTime.textContent = formatTime(currentTime);
  el.musicDuration.textContent = formatTime(duration);

  if (!musicProgressDragging && duration > 0) {
    setMusicProgressPercent((currentTime / duration) * 100);
  }
}

function getMusicSeekPercentFromEvent(event) {
  if (!event || !el.musicProgress) return null;
  const point = event.touches?.[0] || event.changedTouches?.[0] || event;
  if (typeof point.clientX !== "number") return null;

  const rect = el.musicProgress.getBoundingClientRect();
  if (!rect.width) return null;

  return ((point.clientX - rect.left) / rect.width) * 100;
}

function seekMusicToPercent(percent) {
  if (!musicAudio) {
    setMusicProgressPercent(percent);
    return;
  }

  const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
  if (duration <= 0) {
    setMusicProgressPercent(0);
    return;
  }

  const safePercent = Math.max(0, Math.min(100, percent || 0));
  const nextTime = (safePercent / 100) * duration;
  musicAudio.currentTime = nextTime;
  setMusicProgressPercent(safePercent);
  el.musicCurrentTime.textContent = formatTime(nextTime);
  el.musicDuration.textContent = formatTime(duration);
}

function handleMusicSeekMove(event) {
  if (!musicProgressDragging) return;
  event.preventDefault();
  const percent = getMusicSeekPercentFromEvent(event);
  if (percent === null) return;
  seekMusicToPercent(percent);
}

function startMusicSeekInteraction(event) {
  event.preventDefault();
  event.stopPropagation();
  musicProgressDragging = true;
  const percent = getMusicSeekPercentFromEvent(event);
  if (percent !== null) {
    seekMusicToPercent(percent);
  }
}

function stopMusicSeekInteraction(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
    const percent = getMusicSeekPercentFromEvent(event);
    if (percent !== null) {
      seekMusicToPercent(percent);
    }
  }
  musicProgressDragging = false;
  updateMusicProgressUI();
}

function seekMusicFromSlider(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const percent = getMusicSeekPercentFromEvent(event);
  if (percent !== null) {
    seekMusicToPercent(percent);
    return;
  }

  if (musicAudio) {
    const safePercent = parseFloat(el.musicProgress?.getAttribute("aria-valuenow") || "0");
    seekMusicToPercent(safePercent);
  }
}

function syncMusicButton() {
  if (!el.btnPlayMusic) return;
  if (!musicAudio || musicAudio.paused) {
    el.btnPlayMusic.textContent = "▶";
    return;
  }

  el.btnPlayMusic.textContent = "⏸";
}

function updateMusicModeButtons() {
  const modeButtons = [
    [el.btnModeSequential, PLAYER_MODES.sequential],
    [el.btnModeRepeatAll, PLAYER_MODES.repeatAll],
    [el.btnModeRepeatOne, PLAYER_MODES.repeatOne],
    [el.btnModeShuffle, PLAYER_MODES.shuffle],
  ];

  modeButtons.forEach(([button, mode]) => {
    if (!button) return;
    button.classList.toggle("active", state.audio.playerMode === mode);
  });
}

function updateNowPlayingUI() {
  const queueLabel = state.audio.activeQueue === "library"
    ? "Bibliothèque complète"
    : `Playlist : ${state.audio.activeQueue}`;

  if (el.musicNowTitle) {
    el.musicNowTitle.textContent = state.audio.currentTrack ? getTrackLabel(state.audio.currentTrack) : "Choisis une musique";
  }

  if (el.musicSourceBadge) {
    el.musicSourceBadge.textContent = queueLabel;
  }

  if (el.musicNowContext) {
    const modeLabels = {
      [PLAYER_MODES.sequential]: "lecture normale",
      [PLAYER_MODES.repeatAll]: "boucle playlist",
      [PLAYER_MODES.repeatOne]: "boucle titre",
      [PLAYER_MODES.shuffle]: "lecture aléatoire",
    };
    el.musicNowContext.textContent = `${queueLabel} · ${modeLabels[state.audio.playerMode]}`;
  }
}

function renderLibraryList() {
  if (!el.musicSelect) return;
  el.musicSelect.innerHTML = "";

  const tracksToShow = state.audio.activeQueue === "library"
    ? [...MEDIA.site.music]
    : [...getActivePlaylistTracks()];

  if (el.musicListLabel) {
    el.musicListLabel.textContent = state.audio.activeQueue === "library"
      ? "Bibliothèque complète"
      : `Lecture de ${state.audio.activeQueue}`;
  }

  if (!tracksToShow.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Playlist vide";
    el.musicSelect.appendChild(option);
    el.musicSelect.value = "";
    return;
  }

  tracksToShow.forEach((trackPath) => {
    const option = document.createElement("option");
    option.value = trackPath;
    option.textContent = getTrackLabel(trackPath);
    el.musicSelect.appendChild(option);
  });

  if (state.audio.currentTrack && tracksToShow.includes(state.audio.currentTrack)) {
    el.musicSelect.value = state.audio.currentTrack;
  } else {
    el.musicSelect.value = tracksToShow[0];
  }
}

function renderPlaylistsColumn() {
  if (!el.playlistsColumn) return;
  el.playlistsColumn.innerHTML = "";

  const playlistNames = Object.keys(state.audio.playlists).sort((a, b) => a.localeCompare(b, "fr"));
  if (!playlistNames.length) {
    const empty = document.createElement("p");
    empty.className = "empty-playlist-note";
    empty.textContent = "Aucune playlist pour l'instant. Utilise le + pour en créer une.";
    el.playlistsColumn.appendChild(empty);
    return;
  }

  playlistNames.forEach((playlistName) => {
    const card = document.createElement("article");
    card.className = "playlist-card";
    const isCollapsed = Boolean(state.audio.collapsedPlaylists[playlistName]);
    if (state.audio.activeQueue === playlistName) {
      card.classList.add("active");
    }
    if (isCollapsed) {
      card.classList.add("collapsed");
    }

    const header = document.createElement("div");
    header.className = "playlist-card-header";

    const titleButton = document.createElement("button");
    titleButton.type = "button";
    titleButton.className = "playlist-title-btn";
    titleButton.textContent = playlistName;
    titleButton.dataset.action = "select-playlist";
    titleButton.dataset.playlist = playlistName;

    const actions = document.createElement("div");
    actions.className = "playlist-actions-inline";

    const collapseButton = document.createElement("button");
    collapseButton.type = "button";
    collapseButton.className = "playlist-collapse-btn";
    collapseButton.textContent = isCollapsed ? "▸" : "▾";
    collapseButton.title = isCollapsed ? "Dérouler la playlist" : "Réduire la playlist";
    collapseButton.dataset.action = "toggle-collapse";
    collapseButton.dataset.playlist = playlistName;

    const addButton = document.createElement("button");    addButton.type = "button";
    addButton.className = "icon-btn";
    addButton.textContent = "+";
    addButton.title = "Ajouter des musiques";
    addButton.dataset.action = "add-tracks";
    addButton.dataset.playlist = playlistName;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "track-trash-btn";
    deleteButton.textContent = "🗑";
    deleteButton.title = "Supprimer la playlist";
    deleteButton.dataset.action = "delete-playlist";
    deleteButton.dataset.playlist = playlistName;

    actions.appendChild(collapseButton);
    actions.appendChild(addButton);
    actions.appendChild(deleteButton);
    header.appendChild(titleButton);
    header.appendChild(actions);
    card.appendChild(header);

    const tracksWrap = document.createElement("div");
    tracksWrap.className = "playlist-tracks";
    tracksWrap.hidden = isCollapsed;
    const tracks = state.audio.playlists[playlistName] || [];

    if (!tracks.length) {
      const empty = document.createElement("p");
      empty.className = "empty-playlist-note";
      empty.textContent = "Playlist vide. Clique sur le + pour ajouter des morceaux.";
      tracksWrap.appendChild(empty);
    } else {
      tracks.forEach((trackPath) => {
        const row = document.createElement("div");
        row.className = "playlist-track-item";

        const playTrackButton = document.createElement("button");
        playTrackButton.type = "button";
        playTrackButton.className = "playlist-track-name";
        playTrackButton.textContent = getTrackLabel(trackPath);
        playTrackButton.dataset.action = "play-track";
        playTrackButton.dataset.playlist = playlistName;
        playTrackButton.dataset.track = trackPath;

        const removeTrackButton = document.createElement("button");
        removeTrackButton.type = "button";
        removeTrackButton.className = "track-trash-btn";
        removeTrackButton.textContent = "🗑";
        removeTrackButton.title = "Retirer ce morceau";
        removeTrackButton.dataset.action = "remove-track";
        removeTrackButton.dataset.playlist = playlistName;
        removeTrackButton.dataset.track = trackPath;

        row.appendChild(playTrackButton);
        row.appendChild(removeTrackButton);
        tracksWrap.appendChild(row);
      });
    }

    card.appendChild(tracksWrap);
    el.playlistsColumn.appendChild(card);
  });
}

function refreshMusicUI() {
  renderLibraryList();
  renderPlaylistsColumn();
  updateNowPlayingUI();
  updateMusicProgressUI();
  syncMusicButton();
  updateMusicModeButtons();
  updateMuteButton();
}

function setMediaSessionMetadata() {
  if (!("mediaSession" in navigator) || !state.audio.currentTrack) return;

  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: getTrackLabel(state.audio.currentTrack),
      artist: "SabSab",
      album: state.audio.activeQueue === "library" ? "Bibliothèque" : state.audio.activeQueue,
    });
    navigator.mediaSession.playbackState = musicAudio && !musicAudio.paused ? "playing" : "paused";

    navigator.mediaSession.setActionHandler("play", () => {
      playSelectedMusic();
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      pauseMusic();
      syncMusicButton();
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      const previousTrack = pickAdjacentTrack(-1, true);
      if (previousTrack) loadTrack(previousTrack, true);
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      const nextTrack = pickAdjacentTrack(1, true);
      if (nextTrack) loadTrack(nextTrack, true);
    });
  } catch {
    // some mobile browsers do not expose every media session action
  }
}

function bindMusicAudioEvents(audio) {
  audio.addEventListener("loadedmetadata", updateMusicProgressUI);
  audio.addEventListener("timeupdate", updateMusicProgressUI);
  audio.addEventListener("play", () => {
    syncMusicButton();
    updateNowPlayingUI();
    setMediaSessionMetadata();
  });
  audio.addEventListener("pause", () => {
    syncMusicButton();
    setMediaSessionMetadata();
  });
  audio.addEventListener("ended", handleTrackEnd);
}

function ensureMusicAudio(trackPath = state.audio.currentTrack) {
  if (!trackPath) return;

  if (musicAudio && musicAudio.dataset.track === trackPath) {
    musicAudio.volume = state.audio.musicVolume;
    return;
  }

  const wasPlaying = Boolean(musicAudio && !musicAudio.paused);
  if (musicAudio) {
    musicAudio.pause();
  }

  const audio = new Audio(path(trackPath));
  audio.dataset.track = trackPath;
  audio.preload = "auto";
  audio.volume = state.audio.musicVolume;
  audio.loop = false;
  audio.setAttribute("playsinline", "");
  bindMusicAudioEvents(audio);
  musicAudio = audio;
  setMediaSessionMetadata();

  if (wasPlaying && state.audio.musicEnabled && !state.audio.mutedAll) {
    musicAudio.play().catch(() => {});
  }
}

function loadTrack(trackPath, autoplay = false) {
  if (!trackPath) return;
  musicProgressDragging = false;
  state.audio.currentTrack = trackPath;
  ensureMusicAudio(trackPath);
  refreshMusicUI();

  if (autoplay && state.audio.musicEnabled && !state.audio.mutedAll && musicAudio) {
    musicAudio.play().then(() => {
      syncMusicButton();
      updateMusicProgressUI();
    }).catch(() => {
      syncMusicButton();
      updateMusicProgressUI();
    });
  }
}

function playSelectedMusic() {
  if (state.audio.mutedAll) {
    toggleMuteAll(false);
  }

  if (state.audio.musicVolume === 0) {
    state.audio.musicVolume = 0.7;
    if (el.volumeMusic) {
      el.volumeMusic.value = "0.7";
    }
  }

  const queue = getPlayableQueue();
  const fallbackTrack = queue.includes(state.audio.currentTrack)
    ? state.audio.currentTrack
    : queue[0] || (state.audio.activeQueue === "library" ? DEFAULT_TRACK : "");

  if (!fallbackTrack) {
    updatePlaylistStatus("Cette playlist est vide. Ajoute des morceaux avec le +.");
    return;
  }

  state.audio.musicEnabled = true;
  state.audio.musicStarted = true;
  state.audio.wasPlayingBeforeMute = false;
  loadTrack(fallbackTrack, true);
}

function pickAdjacentTrack(direction = 1, usePlaybackMode = true) {
  const queue = getPlayableQueue();
  if (!queue.length) return null;

  let currentIndex = queue.indexOf(state.audio.currentTrack);
  if (currentIndex === -1) {
    return direction >= 0 ? queue[0] : queue[queue.length - 1];
  }

  if (usePlaybackMode && state.audio.playerMode === PLAYER_MODES.shuffle) {
    if (queue.length === 1) return queue[0];
    let randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * queue.length);
    }
    return queue[randomIndex];
  }

  const nextIndex = currentIndex + direction;
  if (nextIndex >= 0 && nextIndex < queue.length) {
    return queue[nextIndex];
  }

  if (usePlaybackMode && state.audio.playerMode === PLAYER_MODES.repeatAll) {
    return queue[(nextIndex + queue.length) % queue.length];
  }

  return null;
}

function handleTrackEnd() {
  if (state.audio.playerMode === PLAYER_MODES.repeatOne && musicAudio) {
    musicAudio.currentTime = 0;
    musicAudio.play().catch(() => {});
    return;
  }

  const nextTrack = pickAdjacentTrack(1, true);
  if (!nextTrack) {
    syncMusicButton();
    updateMusicProgressUI();
    return;
  }

  loadTrack(nextTrack, true);
}

function setPlayerMode(mode) {
  state.audio.playerMode = mode;
  refreshMusicUI();
  setMediaSessionMetadata();
}

function setActiveQueue(queueName) {
  state.audio.activeQueue = queueName;
  const queueTracks = getQueueTracks();

  if (queueName === "library") {
    if (!MEDIA.site.music.includes(state.audio.currentTrack)) {
      state.audio.currentTrack = DEFAULT_TRACK;
      ensureMusicAudio(state.audio.currentTrack);
    }
    refreshMusicUI();
    return;
  }

  if (!queueTracks.length) {
    state.audio.currentTrack = "";
    refreshMusicUI();
    return;
  }

  if (!queueTracks.includes(state.audio.currentTrack)) {
    state.audio.currentTrack = queueTracks[0];
    ensureMusicAudio(state.audio.currentTrack);
  }

  refreshMusicUI();
}

function openCreatePlaylistModal() {
  if (!el.playlistModal) return;
  el.playlistModal.hidden = false;
  el.playlistModalName.value = "";
  el.playlistModalName.focus();
}

function closeCreatePlaylistModal() {
  if (!el.playlistModal) return;
  el.playlistModal.hidden = true;
}

function saveNewPlaylist() {
  const playlistName = el.playlistModalName.value.trim();
  if (!playlistName) {
    updatePlaylistStatus("Donne un nom à la playlist.");
    return;
  }

  if (state.audio.playlists[playlistName]) {
    updatePlaylistStatus("Cette playlist existe déjà.");
    return;
  }

  state.audio.playlists[playlistName] = [];
  state.audio.activeQueue = playlistName;
  savePlaylists();
  closeCreatePlaylistModal();
  refreshMusicUI();
  updatePlaylistStatus(`Playlist "${playlistName}" créée.`);
}

function openPlaylistTrackPicker(playlistName) {
  const existingTracks = new Set(state.audio.playlists[playlistName] || []);
  state.audio.pendingPlaylistName = playlistName;
  el.playlistAddTitle.textContent = `Ajouter des musiques à ${playlistName}`;
  el.playlistTrackOptions.innerHTML = "";

  MEDIA.site.music.forEach((trackPath) => {
    const label = document.createElement("label");
    label.className = "playlist-check-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = trackPath;
    checkbox.checked = existingTracks.has(trackPath);

    const span = document.createElement("span");
    span.textContent = getTrackLabel(trackPath);

    label.appendChild(checkbox);
    label.appendChild(span);
    el.playlistTrackOptions.appendChild(label);
  });

  el.playlistAddModal.hidden = false;
}

function closePlaylistTrackPicker() {
  el.playlistAddModal.hidden = true;
  state.audio.pendingPlaylistName = "";
}

function confirmTrackSelectionForPlaylist() {
  const playlistName = state.audio.pendingPlaylistName;
  if (!playlistName) return;

  const selectedTracks = Array.from(el.playlistTrackOptions.querySelectorAll('input[type="checkbox"]:checked'))
    .map((checkbox) => checkbox.value);

  state.audio.playlists[playlistName] = selectedTracks;
  savePlaylists();
  closePlaylistTrackPicker();
  setActiveQueue(playlistName);

  if (!selectedTracks.length) {
    updatePlaylistStatus(`Playlist "${playlistName}" mise à jour : aucun morceau sélectionné.`);
    return;
  }

  updatePlaylistStatus(`Playlist "${playlistName}" mise à jour.`);
}

function deletePlaylistByName(playlistName) {
  delete state.audio.playlists[playlistName];
  if (state.audio.activeQueue === playlistName) {
    state.audio.activeQueue = "library";
  }
  savePlaylists();
  refreshMusicUI();
  updatePlaylistStatus(`Playlist "${playlistName}" supprimée.`);
}

function removeTrackFromPlaylist(playlistName, trackPath) {
  const nextTracks = (state.audio.playlists[playlistName] || []).filter((track) => track !== trackPath);
  state.audio.playlists[playlistName] = nextTracks;

  if (state.audio.currentTrack === trackPath && state.audio.activeQueue === playlistName) {
    state.audio.currentTrack = nextTracks[0] || DEFAULT_TRACK;
    ensureMusicAudio(state.audio.currentTrack);
  }

  savePlaylists();
  refreshMusicUI();
  updatePlaylistStatus(`Retiré : ${getTrackLabel(trackPath)}`);
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
  el.screenMusic.classList.remove("active");
  if (name === "home") el.screenHome.classList.add("active");
  if (name === "game") el.screenGame.classList.add("active");
  if (name === "quiz") el.screenQuiz.classList.add("active");
  if (name === "music") el.screenMusic.classList.add("active");
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
  const soundBtns = [el.btnSoundMenu, el.btnSoundMenuGame, el.btnSoundMenuQuiz, el.btnSoundMenuMusic].filter(Boolean);
  soundBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      el.soundPanel.hidden = !el.soundPanel.hidden;
      if (!el.soundPanel.hidden && el.onlinePanel) {
        el.onlinePanel.hidden = true;
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (el.soundPanel.hidden) return;
    if (el.soundPanel.contains(event.target)) return;
    if (soundBtns.some((button) => button.contains(event.target))) return;
    el.soundPanel.hidden = true;
  });

  el.btnToggleMute.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMuteAll();
  });

  el.volumeMusic.addEventListener("input", () => {
    state.audio.musicVolume = parseFloat(el.volumeMusic.value);
    if (state.audio.mutedAll) {
      toggleMuteAll(false);
    }

    state.audio.musicEnabled = state.audio.musicVolume > 0;
    if (musicAudio) {
      musicAudio.volume = state.audio.musicVolume;
    }

    if (!state.audio.musicEnabled) {
      state.audio.wasPlayingBeforeMute = Boolean(musicAudio && !musicAudio.paused);
      pauseMusic();
    } else if (state.audio.musicStarted && state.audio.wasPlayingBeforeMute && musicAudio) {
      musicAudio.play().catch(() => {});
      state.audio.wasPlayingBeforeMute = false;
    }

    syncMusicButton();
  });

  el.volumeSfx.addEventListener("input", () => {
    state.audio.sfxVolume = parseFloat(el.volumeSfx.value);
    if (state.audio.mutedAll) {
      toggleMuteAll(false);
    }

    state.audio.sfxEnabled = state.audio.sfxVolume > 0;
    if (sfxAudio) {
      sfxAudio.volume = state.audio.sfxVolume;
    }
  });

  updateMuteButton();
}

function setupMusicScreen() {
  refreshMusicUI();
  updatePlaylistStatus("Choisis une musique ou crée une playlist pour t'organiser.");

  el.btnStartMusic.addEventListener("click", (event) => {
    event.preventDefault();
    fadeTo(() => {
      setActiveScreen("music");
      refreshMusicUI();
    });
  });

  ["pointerdown", "click", "touchstart"].forEach((eventName) => {
    el.musicSelect.addEventListener(eventName, (event) => {
      event.stopPropagation();
    });
  });

  el.musicSelect.addEventListener("change", (event) => {
    event.stopPropagation();
    if (!el.musicSelect.value) return;
    state.audio.currentTrack = el.musicSelect.value;
    loadTrack(state.audio.currentTrack, Boolean(musicAudio && !musicAudio.paused));
    updatePlaylistStatus(`Titre sélectionné : ${getTrackLabel(state.audio.currentTrack)}`);
  });

  el.btnMusicLibraryHome.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveQueue("library");
    updatePlaylistStatus("Retour à l'accueil du lecteur principal.");
  });

  el.musicProgress.addEventListener("pointerdown", startMusicSeekInteraction);
  el.musicProgress.addEventListener("pointermove", handleMusicSeekMove);
  el.musicProgress.addEventListener("pointerup", stopMusicSeekInteraction);
  el.musicProgress.addEventListener("pointercancel", stopMusicSeekInteraction);
  el.musicProgress.addEventListener("click", seekMusicFromSlider);
  el.musicProgress.addEventListener("keydown", (event) => {
    if (!musicAudio) return;
    const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
    if (duration <= 0) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      seekMusicToPercent(((musicAudio.currentTime + 5) / duration) * 100);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      seekMusicToPercent(((musicAudio.currentTime - 5) / duration) * 100);
    }
  });

  el.btnPlayMusic.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (musicAudio && !musicAudio.paused) {
      pauseMusic();
      syncMusicButton();
      return;
    }

    playSelectedMusic();
  });

  el.btnPrevTrack.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const previousTrack = pickAdjacentTrack(-1, true);
    if (previousTrack) {
      state.audio.musicStarted = true;
      loadTrack(previousTrack, true);
    }
  });

  el.btnNextTrack.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const nextTrack = pickAdjacentTrack(1, true);
    if (nextTrack) {
      state.audio.musicStarted = true;
      loadTrack(nextTrack, true);
    }
  });

  el.btnModeSequential.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setPlayerMode(PLAYER_MODES.sequential);
  });
  el.btnModeRepeatAll.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setPlayerMode(PLAYER_MODES.repeatAll);
  });
  el.btnModeRepeatOne.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setPlayerMode(PLAYER_MODES.repeatOne);
  });
  el.btnModeShuffle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setPlayerMode(PLAYER_MODES.shuffle);
  });

  el.btnOpenCreatePlaylist.addEventListener("click", openCreatePlaylistModal);
  el.btnCancelPlaylist.addEventListener("click", closeCreatePlaylistModal);
  el.btnSavePlaylist.addEventListener("click", saveNewPlaylist);
  el.playlistModalName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveNewPlaylist();
    }
  });

  el.btnCancelAddToPlaylist.addEventListener("click", closePlaylistTrackPicker);
  el.btnConfirmAddToPlaylist.addEventListener("click", confirmTrackSelectionForPlaylist);

  [el.playlistModal, el.playlistAddModal].forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target !== modal) return;
      closeCreatePlaylistModal();
      closePlaylistTrackPicker();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeCreatePlaylistModal();
    closePlaylistTrackPicker();
    if (el.onlinePanel) {
      el.onlinePanel.hidden = true;
    }
    if (state.presence.nickname) {
      closeNicknameModal();
    }
  });

  el.playlistsColumn.addEventListener("click", (event) => {
    const actionButton = event.target.closest("button[data-action]");
    if (!actionButton) return;

    event.preventDefault();
    event.stopPropagation();

    const playlistName = actionButton.dataset.playlist;
    const trackPath = actionButton.dataset.track;
    const action = actionButton.dataset.action;

    if (action === "toggle-collapse") {
      state.audio.collapsedPlaylists[playlistName] = !state.audio.collapsedPlaylists[playlistName];
      refreshMusicUI();
      return;
    }

    if (action === "select-playlist") {
      setActiveQueue(playlistName);
      updatePlaylistStatus(`Playlist active : ${playlistName}`);
      return;
    }

    if (action === "add-tracks") {
      openPlaylistTrackPicker(playlistName);
      return;
    }

    if (action === "delete-playlist") {
      deletePlaylistByName(playlistName);
      return;
    }

    if (action === "play-track") {
      state.audio.activeQueue = playlistName;
      state.audio.musicStarted = true;
      loadTrack(trackPath, true);
      updatePlaylistStatus(`Lecture : ${getTrackLabel(trackPath)}`);
      return;
    }

    if (action === "remove-track") {
      removeTrackFromPlaylist(playlistName, trackPath);
    }
  });
}

function setupHome() {
  state.home.krillUnlocked = true;
  state.home.candlesUnlocked = true;
  state.home.lit = 0;
  state.home.locked = false;
  syncKrillShortcutButton();
  syncHomeCandlesVisibility();
  setCandlesMessage("Tu peux allumer les bougies dès le début, juste pour le style ✨");
  refreshMusicUI();
  el.candlesLayer.innerHTML = "";
  const usedCandleSpots = [];
  const screenRect = el.screenHome?.getBoundingClientRect();
  const compactLayout = window.innerWidth <= 760;
  const blockedZones = [el.homeHeader, el.homeMain]
    .filter(Boolean)
    .map((section) => {
      const rect = section.getBoundingClientRect();
      const paddingX = compactLayout ? 16 : 24;
      const paddingY = compactLayout ? 20 : 28;

      return {
        left: ((rect.left - screenRect.left - paddingX) / screenRect.width) * 100,
        right: ((rect.right - screenRect.left + paddingX) / screenRect.width) * 100,
        top: ((rect.top - screenRect.top - paddingY) / screenRect.height) * 100,
        bottom: ((rect.bottom - screenRect.top + paddingY) / screenRect.height) * 100,
      };
    });

  function isInNoCandleZone(x, y) {
    const inBlockedSection = blockedZones.some((zone) => (
      x > zone.left && x < zone.right && y > zone.top && y < zone.bottom
    ));

    if (inBlockedSection) return true;

    if (compactLayout && x > 28 && x < 72 && y > 74) {
      return true;
    }

    return false;
  }

  function getSafeCandleSpot() {
    const minDistance = compactLayout ? 12.5 : 10.5;

    for (let tries = 0; tries < 120; tries += 1) {
      const x = 4 + Math.random() * 92;
      const y = 6 + Math.random() * 88;
      if (isInNoCandleZone(x, y)) continue;
      const tooClose = usedCandleSpots.some((p) => Math.hypot(p.x - x, p.y - y) < minDistance);
      if (tooClose) continue;
      usedCandleSpots.push({ x, y });
      return { x, y };
    }

    const fallback = compactLayout
      ? { x: Math.random() < 0.5 ? 7 : 89, y: 78 + Math.random() * 12 }
      : { x: 6 + Math.random() * 88, y: 12 + Math.random() * 80 };

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
        setCandlesMessage("Toutes les bougies sont allumées ✨ Le mini-jeu est déjà accessible dans le menu.");
      }
    });

    el.candlesLayer.appendChild(img);
  }

  el.btnStartQuiz.addEventListener("click", (event) => {
    event.preventDefault();
    fadeTo(startQuiz);
  });

  el.btnStartKrill.addEventListener("click", (event) => {
    event.preventDefault();
    fadeTo(startEdenGame);
  });

  setupThemeToggles();
  setupSoundPanel();
  setupPresence();
  setupMusicScreen();

  document.querySelectorAll(".disabled-cta").forEach((btn) => {
    if (btn.id === "btn-start-krill" || btn.id === "btn-start-music") return;
    btn.addEventListener("click", () => {
      btn.textContent = "Bientôt disponible";
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
  el.playlistModal.hidden = true;
  el.playlistAddModal.hidden = true;
  el.soundPanel.hidden = true;
  if (el.onlinePanel) {
    el.onlinePanel.hidden = true;
  }
  document.body.classList.remove("preshake", "chaos-mode");
  hideFeedback();
  setActiveScreen("home");
}

el.btnQuizHome.addEventListener("click", returnToMenu);
el.btnMusicHome.addEventListener("click", returnToMenu);
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

loadMusicLibrary().finally(() => {
  applyTheme(state.theme);
  setupHome();
  setActiveScreen("home");
});
