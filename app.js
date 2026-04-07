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
  seenNicknames: "sabsab.presenceSeenNicknames",
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
  screenMulti: document.getElementById("screen-multi"),
  fade: document.getElementById("fade-overlay"),

  candlesLayer: document.getElementById("candles-layer"),
  candlesStatus: document.getElementById("candles-status"),
  homeActionTargets: Array.from(document.querySelectorAll("#screen-home .home-grid button, #screen-home .header-quick-actions > *")),
  btnStartQuiz: document.getElementById("btn-start-quiz"),
  btnStartKrill: document.getElementById("btn-start-krill"),
  btnStartMusic: document.getElementById("btn-start-music"),
  btnStartMulti: document.getElementById("btn-start-multi"),
  btnSoundMenu: document.getElementById("btn-sound-menu"),
  btnSoundMenuGame: document.getElementById("btn-sound-menu-game"),
  btnSoundMenuQuiz: document.getElementById("btn-sound-menu-quiz"),
  btnSoundMenuMusic: document.getElementById("btn-sound-menu-music"),
  btnSoundMenuMulti: document.getElementById("btn-sound-menu-multi"),
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
  btnToggleSkyPiano: document.getElementById("btn-toggle-sky-piano"),
  btnCloseSkyPiano: document.getElementById("btn-close-sky-piano"),
  skyPianoPanel: document.getElementById("sky-piano-panel"),
  skyKeySelect: document.getElementById("sky-key-select"),
  skyPianoGrid: document.getElementById("sky-piano-grid"),
  skyPianoStatus: document.getElementById("sky-piano-status"),
  btnMultiHome: document.getElementById("btn-multi-home"),
  btnToggleMultiChat: document.getElementById("btn-open-multi-chat"),
  btnCloseMultiChat: document.getElementById("btn-close-multi-chat"),
  multiChatDrawer: document.getElementById("multi-chat-drawer"),
  multiChatBackdrop: document.getElementById("multi-chat-backdrop"),
  multiChatStatus: document.getElementById("multi-chat-status"),
  multiChatMessages: document.getElementById("multi-chat-messages"),
  multiChatForm: document.getElementById("multi-chat-form"),
  multiChatInput: document.getElementById("multi-chat-input"),
  multiCanvas: document.getElementById("multi-canvas"),
  multiCanvasColor: document.getElementById("multi-canvas-color"),
  btnOpenMultiColorModal: document.getElementById("btn-open-multi-color-modal"),
  multiCanvasColorHex: document.getElementById("multi-canvas-color-hex"),
  multiColorWheelCore: document.getElementById("multi-color-wheel-core"),
  multiColorModal: document.getElementById("multi-color-modal"),
  btnCloseMultiColorModal: document.getElementById("btn-close-multi-color-modal"),
  multiColorWheelCanvas: document.getElementById("multi-color-wheel-canvas"),
  multiColorModalHex: document.getElementById("multi-color-modal-hex"),
  multiColorPreview: document.getElementById("multi-color-preview"),
  multiCanvasSize: document.getElementById("multi-canvas-size"),
  btnToggleMultiEraser: document.getElementById("btn-toggle-multi-eraser"),
  btnClearMultiCanvas: document.getElementById("btn-clear-multi-canvas"),
  multiMusicPads: document.getElementById("multi-music-pads"),
  multiMusicHint: document.getElementById("multi-music-hint"),
  multiInstrumentPicker: document.getElementById("multi-instrument-picker"),
  btnToggleMultiInstrumentMenu: document.getElementById("btn-toggle-multi-instrument-menu"),
  multiInstrumentMenu: document.getElementById("multi-instrument-menu"),
  multiInstrumentTriggerLabel: document.getElementById("multi-instrument-trigger-label"),
  multiInstrumentButtons: Array.from(document.querySelectorAll("[data-multi-instrument]")),

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
let multiToneContext = null;
let skyToneContext = null;
let skyPianoMasterGain = null;
let skyPianoWetGain = null;
let skyPianoConvolver = null;
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

const DEFAULT_PUBLIC_PRESENCE_URL = "https://sabsab-live.onrender.com";
const PEER_PRESENCE_ROOM = "sabsab-salon-live-v4";
const PEER_PRESENCE_TTL_MS = 45000;
const PEER_PRESENCE_HEARTBEAT_MS = 1800;
const PEER_PRESENCE_POLL_MS = 1200;
const PUBLIC_PRESENCE_TOPIC = "sabsab-live-presence";
const PUBLIC_PRESENCE_POST_URL = `https://ntfy.sh/${PUBLIC_PRESENCE_TOPIC}`;
const PUBLIC_PRESENCE_STREAM_URL = `https://ntfy.sh/${PUBLIC_PRESENCE_TOPIC}/sse?since=1m`;
const MULTI_SHARED_ROOM = "sabsab-multi-v4";
const PUBLIC_MULTI_TOPIC = "sabsab-live-multi";
const PUBLIC_MULTI_POST_URL = `https://ntfy.sh/${PUBLIC_MULTI_TOPIC}`;
const PUBLIC_MULTI_STREAM_URL = `https://ntfy.sh/${PUBLIC_MULTI_TOPIC}/sse?since=1m`;
const MULTI_MUSIC_NOTES = [
  { id: "c3", name: "Do", label: "Do3", key: "Y", aliases: ["y", "Y"], freq: 130.81 },
  { id: "d3", name: "Ré", label: "Ré3", key: "U", aliases: ["u", "U"], freq: 146.83 },
  { id: "e3", name: "Mi", label: "Mi3", key: "I", aliases: ["i", "I"], freq: 164.81 },
  { id: "f3", name: "Fa", label: "Fa3", key: "O", aliases: ["o", "O"], freq: 174.61 },
  { id: "g3", name: "Sol", label: "Sol3", key: "P", aliases: ["p", "P"], freq: 196.0 },
  { id: "a3", name: "La", label: "La3", key: "H", aliases: ["h", "H"], freq: 220.0 },
  { id: "b3", name: "Si", label: "Si3", key: "J", aliases: ["j", "J"], freq: 246.94 },
  { id: "c4", name: "Do", label: "Do4", key: "K", aliases: ["k", "K"], freq: 261.63 },
  { id: "d4", name: "Ré", label: "Ré4", key: "L", aliases: ["l", "L"], freq: 293.66 },
  { id: "e4", name: "Mi", label: "Mi4", key: "M", aliases: ["m", "M"], freq: 329.63 },
  { id: "f4", name: "Fa", label: "Fa4", key: "N", aliases: ["n", "N"], freq: 349.23 },
  { id: "g4", name: "Sol", label: "Sol4", key: ",", aliases: [","], freq: 392.0 },
  { id: "a4", name: "La", label: "La4", key: ";", aliases: [";"], freq: 440.0 },
  { id: "b4", name: "Si", label: "Si4", key: ":", aliases: [":"], freq: 493.88 },
  { id: "c5", name: "Do", label: "Do5", key: "!", aliases: ["!"], freq: 523.25 },
];

const MULTI_INSTRUMENTS = [
  { id: "piano", icon: "🎹", label: "Piano", hint: "sample chaleureux et naturel", sustain: false },
  { id: "violin", icon: "🎻", label: "Violon", hint: "sample soutenu, maintiens la note pour la prolonger", sustain: true },
  { id: "panflute", icon: "🪈", label: "Flûte de pan", hint: "souffle doux, maintiens la note pour la prolonger", sustain: true },
  { id: "ocarina", icon: "🎶", label: "Ocarina", hint: "son rond et aérien, maintiens la note pour la prolonger", sustain: true },
];

const MULTI_INSTRUMENT_SAMPLE_CONFIG = {
  piano: {
    path: "assets/instruments/piano-c4.wav",
    rootFreq: 261.63,
    loop: false,
  },
  violin: {
    path: "assets/instruments/violin-a3.wav",
    rootFreq: 220.0,
    loop: true,
    loopStart: 0.38,
    loopEnd: 1.92,
  },
  panflute: {
    path: "assets/instruments/panflute-c4.wav",
    rootFreq: 261.63,
    loop: true,
    loopStart: 0.22,
    loopEnd: 1.18,
  },
};

const multiInstrumentSampleCache = new Map();
const MULTI_REAL_INSTRUMENT_PRESETS = {
  piano: {
    url: "https://surikov.github.io/webaudiofontdata/sound/0000_JCLive_sf2_file.js",
    variable: "_tone_0000_JCLive_sf2_file",
  },
  violin: {
    url: "https://surikov.github.io/webaudiofontdata/sound/0400_GeneralUserGS_sf2_file.js",
    variable: "_tone_0400_GeneralUserGS_sf2_file",
  },
  panflute: {
    url: "https://surikov.github.io/webaudiofontdata/sound/0750_GeneralUserGS_sf2_file.js",
    variable: "_tone_0750_GeneralUserGS_sf2_file",
  },
  ocarina: {
    url: "https://surikov.github.io/webaudiofontdata/sound/0790_FluidR3_GM_sf2_file.js",
    variable: "_tone_0790_FluidR3_GM_sf2_file",
  },
};
let multiWebAudioFontPlayer = null;
let multiWebAudioFontLibraryPromise = null;
const multiWebAudioFontPresetPromises = new Map();
const multiWebAudioFontReadyPresets = new Map();

const SKY_PIANO_SCALE_OPTIONS = [
  { value: "C", label: "Do majeur", semitone: 0, prefersSharps: true },
  { value: "G", label: "Sol majeur", semitone: 7, prefersSharps: true },
  { value: "D", label: "Ré majeur", semitone: 2, prefersSharps: true },
  { value: "A", label: "La majeur", semitone: 9, prefersSharps: true },
  { value: "E", label: "Mi majeur", semitone: 4, prefersSharps: true },
  { value: "F", label: "Fa majeur", semitone: 5, prefersSharps: false },
  { value: "Bb", label: "Si♭ majeur", semitone: 10, prefersSharps: false },
];

const SKY_NOTE_NAMES_SHARP = ["Do", "Do♯", "Ré", "Ré♯", "Mi", "Fa", "Fa♯", "Sol", "Sol♯", "La", "La♯", "Si"];
const SKY_NOTE_NAMES_FLAT = ["Do", "Ré♭", "Ré", "Mi♭", "Mi", "Fa", "Sol♭", "Sol", "La♭", "La", "Si♭", "Si"];
const SKY_MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24];
const SKY_PIANO_LAYOUT = [
  { noteId: "c3", keyLabel: "Y", codes: ["KeyY"], aliases: ["y", "Y"] },
  { noteId: "d3", keyLabel: "U", codes: ["KeyU"], aliases: ["u", "U"] },
  { noteId: "e3", keyLabel: "I", codes: ["KeyI"], aliases: ["i", "I"] },
  { noteId: "f3", keyLabel: "O", codes: ["KeyO"], aliases: ["o", "O"] },
  { noteId: "g3", keyLabel: "P", codes: ["KeyP"], aliases: ["p", "P"] },
  { noteId: "a3", keyLabel: "H", codes: ["KeyH"], aliases: ["h", "H"] },
  { noteId: "b3", keyLabel: "J", codes: ["KeyJ"], aliases: ["j", "J"] },
  { noteId: "c4", keyLabel: "K", codes: ["KeyK"], aliases: ["k", "K"] },
  { noteId: "d4", keyLabel: "L", codes: ["KeyL"], aliases: ["l", "L"] },
  { noteId: "e4", keyLabel: "M", codes: ["KeyM"], aliases: ["m", "M"] },
  { noteId: "f4", keyLabel: "N", codes: ["KeyN"], aliases: ["n", "N"] },
  { noteId: "g4", keyLabel: ",", codes: ["Comma"], aliases: [","] },
  { noteId: "a4", keyLabel: ";", codes: ["Semicolon"], aliases: [";"] },
  { noteId: "b4", keyLabel: ":", codes: ["Quote"], aliases: [":"] },
  { noteId: "c5", keyLabel: "!", codes: ["Digit1"], aliases: ["!"] },
];

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

function readSeenNicknames() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.seenNicknames) || "[]");
    if (!Array.isArray(stored)) return [];

    return [...new Set(stored.map(sanitizeNickname).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));
  } catch {
    return [];
  }
}

function saveSeenNicknames(names) {
  try {
    localStorage.setItem(STORAGE_KEYS.seenNicknames, JSON.stringify(names));
  } catch {
    // ignore storage errors on private browsing or restricted devices
  }
}

function rememberSeenNicknames(names) {
  const incoming = (Array.isArray(names) ? names : [names])
    .map(sanitizeNickname)
    .filter(Boolean);

  const currentKnown = Array.isArray(state?.presence?.knownUsers) ? state.presence.knownUsers : [];
  const merged = [...new Set([...currentKnown, ...incoming])]
    .sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

  if (state?.presence) {
    state.presence.knownUsers = merged;
  }

  saveSeenNicknames(merged);
  return merged;
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

function readOrCreatePresenceSessionId() {
  return typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `session-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
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

  if (typeof window !== "undefined" && /github\.io$/i.test(window.location.hostname)) {
    return DEFAULT_PUBLIC_PRESENCE_URL;
  }

  return window.location.origin;
}

function shouldUsePresenceServer() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  const baseUrl = getPresenceBaseUrl();

  if (typeof baseUrl === "string" && baseUrl) {
    try {
      const resolvedOrigin = new URL(baseUrl, window.location.origin).origin;
      if (resolvedOrigin !== window.location.origin) {
        return true;
      }
    } catch {
      // ignore invalid configured presence url and fall back to host detection
    }
  }

  return host === "localhost" || host === "127.0.0.1" || host.endsWith(".onrender.com");
}

let peerPresenceLibsPromise = null;

async function importPeerModule(urls) {
  let lastError = null;

  for (const url of urls) {
    try {
      return await import(url);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("Impossible de charger le module temps réel.");
}

async function loadPeerPresenceLibs() {
  if (!peerPresenceLibsPromise) {
    peerPresenceLibsPromise = (async () => {
      try {
        const [Y, websocketModule] = await Promise.all([
          importPeerModule([
            "https://esm.sh/yjs@13.6.18?bundle",
            "https://cdn.jsdelivr.net/npm/yjs@13.6.18/+esm",
          ]),
          importPeerModule([
            "https://esm.sh/y-websocket@1.5.4?bundle",
            "https://cdn.jsdelivr.net/npm/y-websocket@1.5.4/+esm",
          ]),
        ]);

        return {
          Y,
          WebsocketProvider: websocketModule.WebsocketProvider,
        };
      } catch (error) {
        peerPresenceLibsPromise = null;
        throw error;
      }
    })();
  }

  return peerPresenceLibsPromise;
}

const state = {
  theme: readSavedTheme(),
  presence: {
    nickname: readSavedNickname(),
    clientId: readOrCreateClientId(),
    sessionId: readOrCreatePresenceSessionId(),
    users: [],
    knownUsers: readSeenNicknames(),
    connected: false,
    mode: "idle",
    stream: null,
    peerProviders: [],
    peerDoc: null,
    peerPresenceMap: null,
    peerHeartbeatTimer: 0,
    peerPollTimer: 0,
    reconnectTimer: 0,
    refreshNow: null,
    connectToken: 0,
    isLeaving: false,
  },
  multi: {
    connected: false,
    stream: null,
    reconnectTimer: 0,
    connectToken: 0,
    sharedEvents: null,
    sharedObserver: null,
    sharedBoundDoc: null,
    messages: [],
    seenEventIds: [],
    canvasEvents: [],
    lastClearByOwner: {},
    brushColor: "#ff4f7d",
    brushSize: 4,
    tool: "brush",
    activeTool: "brush",
    drawing: false,
    activeStroke: [],
    lastPoint: null,
    lastBroadcastAt: 0,
    pendingBroadcastPoints: [],
    historyCutoff: 0,
    activeMusicVoices: {},
    localHeldNotes: {},
  },
  home: {
    total: 0,
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
    multiInstrument: "piano",
    skyKey: "C",
    skyPianoOpen: false,
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
        .filter((track) => typeof track === "string" && track.trim().length > 0);
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
  el.candlesStatus.hidden = !message;
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

function normalizePresenceUser(userEntry, fallbackId = "") {
  if (typeof userEntry === "string") {
    const safeName = sanitizeNickname(userEntry);
    return safeName ? { id: fallbackId || safeName, clientId: "", name: safeName } : null;
  }

  if (!userEntry || typeof userEntry !== "object") return null;

  const safeName = sanitizeNickname(userEntry.name || userEntry.nickname);
  const safeId = String(userEntry.id || fallbackId || userEntry.clientId || safeName || "");
  const safeClientId = String(userEntry.clientId || safeId || "");
  if (!safeName) return null;

  return { id: safeId, clientId: safeClientId, name: safeName };
}

function getSortedPresenceUsers(userList) {
  const dedupedUsers = new Map();

  (Array.isArray(userList) ? userList : []).forEach((entry, index) => {
    const normalizedUser = normalizePresenceUser(entry, `presence-${index}`);
    if (!normalizedUser) return;

    const key = normalizedUser.clientId || normalizedUser.id || normalizedUser.name.toLocaleLowerCase("fr");
    const existingUser = dedupedUsers.get(key);

    if (!existingUser || normalizedUser.id === state.presence.sessionId) {
      dedupedUsers.set(key, normalizedUser);
    }
  });

  return [...dedupedUsers.values()]
    .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));
}

function clearPresenceRetryTimer() {
  if (!state.presence.reconnectTimer) return;

  try {
    window.clearTimeout(state.presence.reconnectTimer);
  } catch {
    // ignore timer shutdown errors
  }

  state.presence.reconnectTimer = 0;
}

function clearMultiRetryTimer() {
  if (!state.multi.reconnectTimer) return;

  try {
    window.clearTimeout(state.multi.reconnectTimer);
  } catch {
    // ignore timer shutdown errors
  }

  state.multi.reconnectTimer = 0;
}

function notifyPresenceLeaveToServer() {
  if (!state.presence.nickname || !shouldUsePresenceServer()) return;

  const leaveUrl = `${getPresenceBaseUrl()}/__presence/leave`;
  const payload = JSON.stringify({
    clientId: state.presence.sessionId,
    name: state.presence.nickname,
  });

  try {
    if (navigator?.sendBeacon) {
      const body = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon(leaveUrl, body);
      return;
    }
  } catch {
    // ignore beacon errors during page shutdown
  }

  try {
    fetch(leaveUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
      keepalive: true,
      mode: "cors",
    }).catch(() => {});
  } catch {
    // ignore keepalive fetch errors during page shutdown
  }
}

function closePresenceConnections() {
  if (state.presence.stream) {
    try {
      state.presence.stream.close();
    } catch {
      // ignore connection shutdown errors
    }
    state.presence.stream = null;
  }

  if (state.presence.peerHeartbeatTimer) {
    try {
      window.clearInterval(state.presence.peerHeartbeatTimer);
    } catch {
      // ignore timer shutdown errors
    }
    state.presence.peerHeartbeatTimer = 0;
  }

  if (state.presence.peerPollTimer) {
    try {
      window.clearInterval(state.presence.peerPollTimer);
    } catch {
      // ignore timer shutdown errors
    }
    state.presence.peerPollTimer = 0;
  }

  clearPresenceRetryTimer();
  clearMultiRetryTimer();

  if (state.multi.stream) {
    try {
      state.multi.stream.close();
    } catch {
      // ignore stream shutdown errors
    }
    state.multi.stream = null;
  }

  state.presence.refreshNow = null;
  state.multi.connected = false;
  if (state.multi.sharedEvents && state.multi.sharedObserver) {
    try {
      state.multi.sharedEvents.unobserve(state.multi.sharedObserver);
    } catch {
      // ignore shared observer cleanup errors
    }
  }
  state.multi.sharedEvents = null;
  state.multi.sharedObserver = null;
  state.multi.sharedBoundDoc = null;

  if (state.presence.peerPresenceMap) {
    try {
      if (typeof state.presence.peerPresenceMap.setLocalState === "function") {
        state.presence.peerPresenceMap.setLocalState(null);
      } else {
        state.presence.peerPresenceMap.delete?.(state.presence.sessionId);
      }
    } catch {
      // ignore shared-room cleanup errors
    }
    state.presence.peerPresenceMap = null;
  }

  if (Array.isArray(state.presence.peerProviders)) {
    state.presence.peerProviders.forEach((provider) => {
      if (!provider) return;
      try {
        provider.awareness?.setLocalState(null);
        provider.destroy();
      } catch {
        // ignore connection shutdown errors
      }
    });
  }
  state.presence.peerProviders = [];

  if (state.presence.peerDoc) {
    try {
      state.presence.peerDoc.destroy();
    } catch {
      // ignore document shutdown errors
    }
    state.presence.peerDoc = null;
  }
}

function updateOnlinePanel() {
  if (!el.onlineStatus || !el.onlineCount || !el.onlineUsersList) return;

  const sourceUsers = Array.isArray(state.presence.users) ? [...state.presence.users] : [];
  const hasCurrentUser = sourceUsers.some((entry, index) => {
    const normalizedUser = normalizePresenceUser(entry, `presence-${index}`);
    return normalizedUser && (
      normalizedUser.id === state.presence.sessionId
      || normalizedUser.name === state.presence.nickname
    );
  });

  const liveUsers = getSortedPresenceUsers(
    state.presence.mode === "shared" && state.presence.nickname && !hasCurrentUser
      ? [{ id: state.presence.sessionId, name: state.presence.nickname }, ...sourceUsers]
      : sourceUsers
  );

  const liveUserNames = liveUsers.map((user) => user.name);
  rememberSeenNicknames([state.presence.nickname, ...liveUserNames]);
  const displayUsers = liveUsers;
  const count = liveUsers.length;

  el.onlineCount.textContent = `${count} connecté${count > 1 ? "s" : ""}`;

  if (!state.presence.nickname) {
    el.onlineStatus.textContent = "Choisis ton pseudo pour apparaître en direct.";
  } else if (state.presence.connected) {
    el.onlineStatus.textContent = state.presence.mode === "shared"
      ? `Salon partagé actif en tant que ${state.presence.nickname}.`
      : `Connecté en direct en tant que ${state.presence.nickname}.`;
  } else if (state.presence.mode === "shared") {
    el.onlineStatus.textContent = `Connexion du salon partagé pour ${state.presence.nickname}...`;
  } else {
    el.onlineStatus.textContent = `Connexion en cours pour ${state.presence.nickname}...`;
  }

  el.onlineUsersList.innerHTML = "";

  if (!displayUsers.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "online-empty";
    emptyItem.textContent = "Personne en ligne pour l'instant.";
    el.onlineUsersList.appendChild(emptyItem);
  } else {
    const hasLiveSelfId = liveUsers.some((user) => user.id === state.presence.sessionId);

    displayUsers.forEach((user) => {
      const isCurrentUser = user.id === state.presence.sessionId
        || (!hasLiveSelfId && user.name === state.presence.nickname);

      const item = document.createElement("li");
      item.className = "online-user-item";
      if (isCurrentUser) {
        item.classList.add("online-user-you");
      }

      const copy = document.createElement("span");
      copy.className = "online-user-copy";

      const dot = document.createElement("span");
      dot.className = "online-user-dot";

      const name = document.createElement("span");
      name.textContent = isCurrentUser ? `${user.name} (toi)` : user.name;

      const status = document.createElement("span");
      status.className = "online-user-state";
      status.textContent = "En ligne";

      copy.append(dot, name);
      item.append(copy, status);
      el.onlineUsersList.appendChild(item);
    });
  }

  if (Array.isArray(el.onlineTriggers)) {
    el.onlineTriggers.forEach((button) => {
      button.classList.toggle("is-live", count > 0);
      button.title = count > 0 ? `${count} personne(s) en ligne` : "Voir les personnes connectées";
      button.setAttribute("aria-expanded", String(el.onlinePanel ? !el.onlinePanel.hidden : false));
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
  rememberSeenNicknames(nickname);
  closeNicknameModal();
  connectPresenceStream();
  updateOnlinePanel();
}

async function connectPeerPresence() {
  if (!state.presence.nickname) {
    state.presence.connected = false;
    updateOnlinePanel();
    return;
  }

  const connectToken = ++state.presence.connectToken;
  closePresenceConnections();
  state.presence.mode = "shared";
  state.presence.connected = false;
  state.presence.users = [{
    id: state.presence.sessionId,
    clientId: state.presence.clientId,
    name: state.presence.nickname,
  }];
  updateOnlinePanel();

  const isAnyProviderLive = () => (state.presence.peerProviders || []).some((provider) => {
    const providerStatus = String(provider?.__sabsabStatus || "").toLowerCase();
    return providerStatus === "connected" || Boolean(provider?.wsconnected || provider?.connected || provider?.synced);
  });

  const schedulePresenceRetry = () => {
    if (state.presence.reconnectTimer) return;
    state.presence.reconnectTimer = window.setTimeout(() => {
      state.presence.reconnectTimer = 0;
      if (state.presence.connectToken !== connectToken) return;
      if (!isAnyProviderLive()) {
        connectPeerPresence();
      }
    }, 4000);
  };

  try {
    const { Y, WebsocketProvider } = await loadPeerPresenceLibs();
    if (state.presence.connectToken !== connectToken) return;

    const doc = new Y.Doc();
    const websocketProvider = new WebsocketProvider("wss://demos.yjs.dev", PEER_PRESENCE_ROOM, doc);
    const providers = [websocketProvider];
    const awareness = websocketProvider.awareness;

    providers.forEach((provider) => {
      provider.__sabsabStatus = "connecting";
    });

    state.presence.peerDoc = doc;
    state.presence.peerPresenceMap = awareness;
    state.presence.peerProviders = providers;

    const syncUsersFromAwareness = () => {
      if (state.presence.connectToken !== connectToken) return;

      const nextUsers = [];

      providers.forEach((provider) => {
        const awarenessStates = provider?.awareness?.getStates?.();
        if (!awarenessStates || typeof awarenessStates.forEach !== "function") return;

        awarenessStates.forEach((rawState, awarenessClientId) => {
          const entry = rawState?.presence && typeof rawState.presence === "object"
            ? rawState.presence
            : rawState;

          if (!entry || typeof entry !== "object") return;

          const normalizedUser = normalizePresenceUser({
            id: String(entry.id || entry.sessionId || awarenessClientId),
            clientId: String(entry.clientId || entry.id || entry.sessionId || awarenessClientId),
            name: entry.name,
          }, String(entry.id || entry.sessionId || awarenessClientId));

          if (normalizedUser) {
            nextUsers.push(normalizedUser);
          }
        });
      });

      if (!nextUsers.some((user) => user.id === state.presence.sessionId)) {
        nextUsers.push({
          id: state.presence.sessionId,
          clientId: state.presence.clientId,
          name: state.presence.nickname,
        });
      }

      state.presence.users = getSortedPresenceUsers(nextUsers);
      rememberSeenNicknames([state.presence.nickname, ...state.presence.users.map((user) => user.name)]);
      state.presence.connected = isAnyProviderLive() || state.presence.users.length > 0;
      updateOnlinePanel();
      connectMultiRealtime();
    };

    const publishLocalPresence = () => {
      if (state.presence.connectToken !== connectToken) return;

      providers.forEach((provider) => {
        provider?.awareness?.setLocalStateField?.("presence", {
          id: state.presence.sessionId,
          sessionId: state.presence.sessionId,
          clientId: state.presence.clientId,
          name: state.presence.nickname,
          lastSeen: Date.now(),
        });
      });
    };

    awareness?.on?.("change", syncUsersFromAwareness);

    providers.forEach((provider) => {
      provider.on?.("status", (event) => {
        if (state.presence.connectToken !== connectToken) return;

        const nextStatus = String(event?.status || "").toLowerCase();
        provider.__sabsabStatus = nextStatus || provider.__sabsabStatus || "connecting";

        if (nextStatus === "connected") {
          clearPresenceRetryTimer();
          publishLocalPresence();
          syncUsersFromAwareness();
          return;
        }

        state.presence.connected = isAnyProviderLive();
        updateOnlinePanel();

        if (["disconnected", "closed", "failed", "error"].includes(nextStatus) && !isAnyProviderLive()) {
          schedulePresenceRetry();
        }
      });

      provider.on?.("sync", (isSynced) => {
        if (state.presence.connectToken !== connectToken) return;
        if (isSynced === false) return;
        provider.__sabsabStatus = "connected";
        clearPresenceRetryTimer();
        publishLocalPresence();
        syncUsersFromAwareness();
      });
    });

    state.presence.refreshNow = () => {
      publishLocalPresence();
      syncUsersFromAwareness();
    };

    publishLocalPresence();
    syncUsersFromAwareness();
    connectMultiRealtime(true);

    state.presence.peerHeartbeatTimer = window.setInterval(() => {
      publishLocalPresence();
      syncUsersFromAwareness();
    }, PEER_PRESENCE_HEARTBEAT_MS);

    state.presence.peerPollTimer = window.setInterval(() => {
      if (!isAnyProviderLive()) {
        schedulePresenceRetry();
      }
      syncUsersFromAwareness();
    }, PEER_PRESENCE_POLL_MS);
  } catch (error) {
    if (state.presence.connectToken !== connectToken) return;

    state.presence.mode = "offline";
    state.presence.connected = false;
    state.presence.users = state.presence.nickname
      ? [{ id: state.presence.sessionId, clientId: state.presence.clientId, name: state.presence.nickname }]
      : [];
    updateOnlinePanel();
    schedulePresenceRetry();
    console.warn("Presence fallback unavailable:", error);
  }
}

function connectPresenceStream() {
  if (!state.presence.nickname) {
    state.presence.connected = false;
    updateOnlinePanel();
    return;
  }

  if (!shouldUsePresenceServer() || typeof EventSource === "undefined") {
    connectPeerPresence();
    return;
  }

  const connectToken = ++state.presence.connectToken;
  closePresenceConnections();
  state.presence.mode = "server";
  state.presence.isLeaving = false;

  const presenceBaseUrl = getPresenceBaseUrl();
  const presenceUrl = `${presenceBaseUrl}/__presence?name=${encodeURIComponent(state.presence.nickname)}&clientId=${encodeURIComponent(state.presence.sessionId)}`;
  const stream = new EventSource(presenceUrl);
  state.presence.stream = stream;

  stream.onopen = () => {
    if (state.presence.connectToken !== connectToken) return;
    state.presence.connected = true;
    updateOnlinePanel();
  };

  stream.onmessage = (event) => {
    try {
      const payload = JSON.parse(event.data);
      if (payload.type !== "presence") return;
      state.presence.users = Array.isArray(payload.users) ? payload.users : [];
      const liveUsers = getSortedPresenceUsers(state.presence.users);
      rememberSeenNicknames([state.presence.nickname, ...liveUsers.map((user) => user.name)]);
      state.presence.connected = true;
      updateOnlinePanel();
    } catch {
      // ignore malformed presence payloads
    }
  };

  stream.onerror = () => {
    if (state.presence.connectToken !== connectToken) return;
    state.presence.connected = false;
    state.presence.users = [];
    updateOnlinePanel();

    if (state.presence.isLeaving) {
      try {
        stream.close();
      } catch {
        // ignore stream close errors during shutdown
      }
      return;
    }

    if (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
      connectPeerPresence();
    }
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
  const refreshPresenceImmediately = () => {
    if (!state.presence.nickname || typeof state.presence.refreshNow !== "function") return;
    state.presence.refreshNow();
  };

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
        if (el.soundPanel && el.onlinePanel && !el.onlinePanel.hidden) {
          el.soundPanel.hidden = true;
        }
        if (el.onlinePanel && !el.onlinePanel.hidden) {
          refreshPresenceImmediately();
        }
        updateOnlinePanel();
      });
    });
  }

  document.addEventListener("click", (event) => {
    if (!el.onlinePanel || el.onlinePanel.hidden) return;
    if (el.onlinePanel.contains(event.target)) return;
    if (Array.isArray(el.onlineTriggers) && el.onlineTriggers.some((button) => button.contains(event.target))) return;
    el.onlinePanel.hidden = true;
    updateOnlinePanel();
  });

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

  window.addEventListener("focus", () => {
    refreshPresenceImmediately();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      refreshPresenceImmediately();
    }
  });

  window.addEventListener("online", () => {
    refreshPresenceImmediately();
  });

  const sendOfflinePresenceSignal = () => {
    if (!state.presence.nickname) return;

    state.presence.isLeaving = true;
    clearOwnMultiCanvas(true, "leave-page");

    if (shouldUsePresenceServer()) {
      notifyPresenceLeaveToServer();
      state.presence.users = state.presence.users.filter((user) => user?.clientId !== state.presence.sessionId);
      state.presence.connected = false;
      updateOnlinePanel();
      return;
    }

    try {
      state.presence.peerProviders?.forEach((provider) => {
        provider?.awareness?.setLocalState?.(null);
      });

      if (typeof state.presence.peerPresenceMap?.setLocalState === "function") {
        state.presence.peerPresenceMap.setLocalState(null);
      }
    } catch {
      // ignore unload presence errors
    }
  };

  const shutdownPresence = () => {
    sendOfflinePresenceSignal();
    closePresenceConnections();
  };

  window.addEventListener("beforeunload", shutdownPresence);
  window.addEventListener("pagehide", shutdownPresence);
  window.addEventListener("unload", shutdownPresence);
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

  if (skyPianoMasterGain && skyToneContext) {
    const nextGain = state.audio.mutedAll || !state.audio.musicEnabled
      ? 0.0001
      : Math.max(0.04, state.audio.musicVolume * 0.3);
    skyPianoMasterGain.gain.setValueAtTime(nextGain, skyToneContext.currentTime);
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
  const wasMultiActive = el.screenMulti.classList.contains("active");

  el.screenHome.classList.remove("active");
  el.screenGame.classList.remove("active");
  el.screenQuiz.classList.remove("active");
  el.screenMusic.classList.remove("active");
  el.screenMulti.classList.remove("active");
  if (name === "home") el.screenHome.classList.add("active");
  if (name === "game") el.screenGame.classList.add("active");
  if (name === "quiz") el.screenQuiz.classList.add("active");
  if (name === "music") el.screenMusic.classList.add("active");
  if (name === "multi") {
    el.screenMulti.classList.add("active");
    connectMultiRealtime();
    syncMultiCanvasSize();
    redrawMultiCanvasHistory();
  }

  if (wasMultiActive && name !== "multi") {
    releaseAllLocalMultiNotes(true);
    clearOwnMultiCanvas(true, "leave-screen");
  }
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
  const soundBtns = [el.btnSoundMenu, el.btnSoundMenuGame, el.btnSoundMenuQuiz, el.btnSoundMenuMusic, el.btnSoundMenuMulti].filter(Boolean);
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

    if (skyPianoMasterGain && skyToneContext) {
      const nextGain = state.audio.mutedAll || !state.audio.musicEnabled
        ? 0.0001
        : Math.max(0.04, state.audio.musicVolume * 0.3);
      skyPianoMasterGain.gain.setValueAtTime(nextGain, skyToneContext.currentTime);
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

function getSkyPianoScale() {
  return SKY_PIANO_SCALE_OPTIONS.find((entry) => entry.value === state.audio.skyKey) || SKY_PIANO_SCALE_OPTIONS[0];
}

function midiToFrequency(midi) {
  return 440 * 2 ** ((midi - 69) / 12);
}

function getSkyPianoNoteData(noteIndex) {
  const scale = getSkyPianoScale();
  const rootMidi = 48 + scale.semitone;
  const midi = rootMidi + SKY_MAJOR_INTERVALS[noteIndex];
  const noteNames = scale.prefersSharps ? SKY_NOTE_NAMES_SHARP : SKY_NOTE_NAMES_FLAT;
  const noteName = noteNames[((midi % 12) + 12) % 12];
  const octave = Math.floor(midi / 12) - 1;

  return {
    noteName,
    label: `${noteName}${octave}`,
    freq: midiToFrequency(midi),
  };
}

function buildSkyImpulseBuffer(audioContext) {
  const duration = 1.8;
  const decay = 2.2;
  const length = Math.floor(audioContext.sampleRate * duration);
  const impulse = audioContext.createBuffer(2, length, audioContext.sampleRate);

  for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
    const channelData = impulse.getChannelData(channel);
    for (let i = 0; i < length; i += 1) {
      const progress = i / length;
      channelData[i] = (Math.random() * 2 - 1) * ((1 - progress) ** decay);
    }
  }

  return impulse;
}

function ensureSkyToneContext(tryResume = false) {
  if (!skyToneContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      skyToneContext = new AudioCtx();
      skyPianoMasterGain = skyToneContext.createGain();
      skyPianoWetGain = skyToneContext.createGain();
      skyPianoConvolver = skyToneContext.createConvolver();
      skyPianoConvolver.buffer = buildSkyImpulseBuffer(skyToneContext);

      const dryGain = skyToneContext.createGain();
      dryGain.gain.value = 0.84;
      skyPianoWetGain.gain.value = 0.24;
      skyPianoMasterGain.gain.value = Math.max(0.04, state.audio.musicVolume * 0.3);

      skyPianoMasterGain.connect(dryGain);
      skyPianoMasterGain.connect(skyPianoConvolver);
      skyPianoConvolver.connect(skyPianoWetGain);
      dryGain.connect(skyToneContext.destination);
      skyPianoWetGain.connect(skyToneContext.destination);
    }
  }

  if (tryResume && skyToneContext?.state === "suspended") {
    skyToneContext.resume().catch(() => {});
  }

  if (skyPianoMasterGain && skyToneContext) {
    const nextGain = state.audio.mutedAll || !state.audio.musicEnabled
      ? 0.0001
      : Math.max(0.04, state.audio.musicVolume * 0.3);
    skyPianoMasterGain.gain.setValueAtTime(nextGain, skyToneContext.currentTime);
  }

  return skyToneContext;
}

function setSkyPianoStatus(message) {
  if (!el.skyPianoStatus) return;
  el.skyPianoStatus.textContent = message;
}

function flashSkyPianoButton(button) {
  if (!button) return;
  button.classList.add("is-playing");
  clearTimeout(button._skyFlashTimer);
  button._skyFlashTimer = window.setTimeout(() => {
    button.classList.remove("is-playing");
  }, 220);
}

function isMultiScreenActive() {
  return Boolean(el.screenMulti?.classList.contains("active"));
}

function getCurrentMultiInstrument(instrumentId = state.audio.multiInstrument) {
  const safeInstrumentId = instrumentId === "triangle" ? "ocarina" : instrumentId;
  return MULTI_INSTRUMENTS.find((entry) => entry.id === safeInstrumentId) || MULTI_INSTRUMENTS[0];
}

function getMultiInstrumentReadyMessage(instrumentId = state.audio.multiInstrument) {
  const instrument = getCurrentMultiInstrument(instrumentId);
  const holdHint = instrument.sustain ? " Maintiens la touche ou le doigt pour faire durer le son." : "";
  return `${instrument.label} prêt : Do3 → Do5 sur Y U I O P · H J K L M · N , ; : !${holdHint}`;
}

function releaseMultiButtonState(noteId = "") {
  const selector = noteId ? `[data-note="${noteId}"]` : "[data-note]";
  el.skyPianoGrid?.querySelectorAll(selector).forEach((button) => {
    button.classList.remove("is-held");
    delete button.dataset.activeVoiceId;
  });
}

function toggleMultiInstrumentMenu(forceOpen) {
  if (!el.multiInstrumentMenu || !el.btnToggleMultiInstrumentMenu) return;

  const isOpen = el.multiInstrumentPicker?.classList.contains("is-open") || !el.multiInstrumentMenu.hidden;
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !isOpen;
  el.multiInstrumentMenu.hidden = !shouldOpen;
  el.multiInstrumentPicker?.classList.toggle("is-open", shouldOpen);
  el.btnToggleMultiInstrumentMenu.setAttribute("aria-expanded", String(shouldOpen));
}

function updateMultiInstrumentButtons() {
  if (Array.isArray(el.multiInstrumentButtons)) {
    el.multiInstrumentButtons.forEach((button) => {
      const isActive = button.dataset.multiInstrument === state.audio.multiInstrument;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  const instrument = getCurrentMultiInstrument();
  if (el.multiInstrumentTriggerLabel) {
    const prefix = instrument.icon ? `${instrument.icon} ` : "";
    el.multiInstrumentTriggerLabel.textContent = `${prefix}${instrument.label}`;
  }
  warmupMultiInstrumentSample(instrument.id);

  if (el.skyPianoStatus && state.audio.skyPianoOpen) {
    el.skyPianoStatus.textContent = getMultiInstrumentReadyMessage(instrument.id);
  }
}

function setMultiInstrument(instrumentId) {
  const instrument = getCurrentMultiInstrument(instrumentId);
  releaseAllLocalMultiNotes(true);
  state.audio.multiInstrument = instrument.id;
  warmupMultiInstrumentSample(instrument.id);
  updateMultiInstrumentButtons();
  toggleMultiInstrumentMenu(false);
}

function getMultiInstrumentSampleConfig(instrumentId) {
  return MULTI_INSTRUMENT_SAMPLE_CONFIG[instrumentId] || null;
}

function getRealMultiInstrumentPresetConfig(instrumentId) {
  return MULTI_REAL_INSTRUMENT_PRESETS[instrumentId] || null;
}

function frequencyToMidiPitch(freq) {
  const safeFreq = Math.max(1, Number(freq || 440));
  return Math.max(0, Math.min(127, Math.round(69 + (12 * Math.log2(safeFreq / 440)))));
}

function loadExternalScriptOnce(url, globalName) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return Promise.reject(new Error("Chargement navigateur indisponible."));
  }

  if (globalName && window[globalName]) {
    return Promise.resolve(window[globalName]);
  }

  return new Promise((resolve, reject) => {
    const scriptSelector = `script[data-sabsab-script="${url}"]`;
    const existingScript = document.querySelector(scriptSelector);

    const handleLoad = () => resolve(globalName ? window[globalName] : true);
    const handleError = () => reject(new Error(`Impossible de charger ${url}`));

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.sabsabScript = url;
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  });
}

async function ensureWebAudioFontPlayer(toneContext = ensureSkyToneContext(false)) {
  if (!toneContext) return null;

  if (!multiWebAudioFontLibraryPromise) {
    multiWebAudioFontLibraryPromise = loadExternalScriptOnce(
      "https://surikov.github.io/webaudiofont/npm/dist/WebAudioFontPlayer.js",
      "WebAudioFontPlayer",
    ).catch((error) => {
      multiWebAudioFontLibraryPromise = null;
      throw error;
    });
  }

  await multiWebAudioFontLibraryPromise;

  if (!multiWebAudioFontPlayer && typeof window.WebAudioFontPlayer === "function") {
    multiWebAudioFontPlayer = new window.WebAudioFontPlayer();
  }

  return multiWebAudioFontPlayer;
}

async function loadRealMultiInstrumentPreset(instrumentId, toneContext = ensureSkyToneContext(false)) {
  const presetConfig = getRealMultiInstrumentPresetConfig(instrumentId);
  if (!presetConfig || !toneContext) return null;

  if (multiWebAudioFontReadyPresets.has(instrumentId)) {
    return multiWebAudioFontReadyPresets.get(instrumentId);
  }

  if (multiWebAudioFontPresetPromises.has(instrumentId)) {
    return multiWebAudioFontPresetPromises.get(instrumentId);
  }

  const promise = ensureWebAudioFontPlayer(toneContext)
    .then((player) => {
      if (!player) return null;
      return loadExternalScriptOnce(presetConfig.url, presetConfig.variable).then(() => {
        const preset = window[presetConfig.variable] || null;
        if (preset) {
          try {
            player.loader.decodeAfterLoading(toneContext, presetConfig.variable);
          } catch {
            // ignore eager decode issues and let WebAudioFont decode lazily if needed
          }
          multiWebAudioFontReadyPresets.set(instrumentId, preset);
        }
        return preset;
      });
    })
    .catch((error) => {
      multiWebAudioFontPresetPromises.delete(instrumentId);
      throw error;
    });

  multiWebAudioFontPresetPromises.set(instrumentId, promise);
  return promise;
}

async function loadMultiInstrumentSample(instrumentId, toneContext = ensureSkyToneContext(false)) {
  const sampleConfig = getMultiInstrumentSampleConfig(instrumentId);
  if (!sampleConfig || !toneContext || typeof fetch !== "function") return null;

  const cached = multiInstrumentSampleCache.get(instrumentId);
  if (cached?.status === "ready" && cached.buffer) {
    return cached.buffer;
  }
  if (cached?.promise) {
    return cached.promise;
  }

  const promise = fetch(path(sampleConfig.path), { cache: "force-cache" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Sample introuvable: ${sampleConfig.path}`);
      }
      return response.arrayBuffer();
    })
    .then((buffer) => toneContext.decodeAudioData(buffer.slice(0)))
    .then((audioBuffer) => {
      multiInstrumentSampleCache.set(instrumentId, {
        status: "ready",
        buffer: audioBuffer,
      });
      return audioBuffer;
    })
    .catch((error) => {
      multiInstrumentSampleCache.set(instrumentId, {
        status: "error",
        error,
      });
      throw error;
    });

  multiInstrumentSampleCache.set(instrumentId, {
    status: "loading",
    promise,
  });

  return promise;
}

function warmupMultiInstrumentSample(instrumentId) {
  const toneContext = ensureSkyToneContext(false);
  if (!toneContext) return;
  loadRealMultiInstrumentPreset(instrumentId, toneContext).catch(() => {});
  loadMultiInstrumentSample(instrumentId, toneContext).catch(() => {});
}

function buildMultiNoiseBuffer(audioContext, duration = 1.8) {
  const length = Math.max(1, Math.floor(audioContext.sampleRate * duration));
  const buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  let brown = 0;
  let smooth = 0;

  for (let i = 0; i < length; i += 1) {
    const white = Math.random() * 2 - 1;
    brown = (brown + 0.018 * white) / 1.018;
    smooth = (smooth * 0.965) + (brown * 0.035);
    const progress = i / length;
    data[i] = smooth * (1 - progress * 0.42);
  }

  return buffer;
}

function createMultiInstrumentVoice(toneContext, note, instrumentId = state.audio.multiInstrument, options = {}) {
  if (!toneContext || !skyPianoMasterGain || !note) return null;

  const now = toneContext.currentTime;
  const instrument = getCurrentMultiInstrument(instrumentId);
  const sampleConfig = getMultiInstrumentSampleConfig(instrument.id);
  const sampleEntry = sampleConfig ? multiInstrumentSampleCache.get(instrument.id) : null;
  const realPreset = multiWebAudioFontReadyPresets.get(instrument.id) || null;
  const mixer = toneContext.createGain();
  const filter = toneContext.createBiquadFilter();
  const voiceGain = toneContext.createGain();
  const oscillators = [];
  const extraSources = [];
  const toneLevel = Math.max(0.02, state.audio.musicVolume * 0.13);

  mixer.connect(filter);
  filter.connect(voiceGain);
  voiceGain.connect(skyPianoMasterGain);

  const addOscillator = (shape, frequency, gainValue, detuneCents = 0) => {
    const oscillator = toneContext.createOscillator();
    const oscillatorGain = toneContext.createGain();

    if (Array.isArray(shape)) {
      const real = new Float32Array(shape.length + 1);
      const imag = new Float32Array(shape.length + 1);
      shape.forEach((amplitude, index) => {
        imag[index + 1] = amplitude;
      });
      oscillator.setPeriodicWave(toneContext.createPeriodicWave(real, imag, { disableNormalization: false }));
    } else {
      oscillator.type = shape;
    }

    oscillator.frequency.setValueAtTime(frequency, now);
    if (oscillator.detune) {
      oscillator.detune.setValueAtTime(detuneCents, now);
    }

    oscillatorGain.gain.value = gainValue;
    oscillator.connect(oscillatorGain);
    oscillatorGain.connect(mixer);
    oscillators.push({ node: oscillator, gain: oscillatorGain });
    return oscillator;
  };

  const addPlaybackVibrato = (targetParam, rate, depth) => {
    if (!targetParam) return;
    const lfo = toneContext.createOscillator();
    const lfoGain = toneContext.createGain();
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(rate, now);
    lfoGain.gain.setValueAtTime(0.00001, now);
    lfoGain.gain.linearRampToValueAtTime(depth, now + 0.16);
    lfo.connect(lfoGain);
    lfoGain.connect(targetParam);
    extraSources.push(lfo);
  };

  const addVibrato = (targets, rate, depth) => {
    const lfo = toneContext.createOscillator();
    const lfoGain = toneContext.createGain();
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(rate, now);
    lfoGain.gain.setValueAtTime(0.0001, now);
    lfoGain.gain.linearRampToValueAtTime(depth, now + 0.18);
    lfo.connect(lfoGain);
    targets.forEach((target) => {
      if (target?.frequency) {
        lfoGain.connect(target.frequency);
      }
    });
    extraSources.push(lfo);
  };

  const addBreathNoise = (gainValue = 0.018, centerFrequency = Math.max(900, note.freq * 5)) => {
    const noise = toneContext.createBufferSource();
    const noiseFilter = toneContext.createBiquadFilter();
    const noiseGain = toneContext.createGain();
    noise.buffer = buildMultiNoiseBuffer(toneContext, 1.6);
    noise.loop = true;
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(centerFrequency, now);
    noiseFilter.Q.value = 1.2;
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(Math.max(0.0002, gainValue), now + 0.05);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(mixer);
    extraSources.push(noise);
  };

  const addNoiseBurst = ({ type = "bandpass", frequency = 2600, q = 1.2, peak = 0.014, attack = 0.004, decay = 0.08, duration = 0.24 } = {}) => {
    const noise = toneContext.createBufferSource();
    const noiseFilter = toneContext.createBiquadFilter();
    const noiseGain = toneContext.createGain();
    noise.buffer = buildMultiNoiseBuffer(toneContext, duration);
    noise.loop = false;
    noiseFilter.type = type;
    noiseFilter.frequency.setValueAtTime(frequency, now);
    noiseFilter.Q.value = q;
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), now + Math.max(0.003, attack));
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(0.03, decay));
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(mixer);
    extraSources.push(noise);
  };

  const addAmbienceSend = (amount = 0.24, delaySeconds = 0.055, feedbackAmount = 0.12) => {
    if (!skyPianoConvolver) return;

    const sendGain = toneContext.createGain();
    sendGain.gain.setValueAtTime(Math.max(0, amount), now);
    voiceGain.connect(sendGain);

    if (delaySeconds > 0) {
      const delay = toneContext.createDelay(0.4);
      const feedback = toneContext.createGain();
      const delayFilter = toneContext.createBiquadFilter();

      delay.delayTime.setValueAtTime(delaySeconds, now);
      feedback.gain.setValueAtTime(Math.max(0, feedbackAmount), now);
      delayFilter.type = "lowpass";
      delayFilter.frequency.setValueAtTime(2800, now);
      delayFilter.Q.value = 0.6;

      sendGain.connect(delay);
      delay.connect(delayFilter);
      delayFilter.connect(skyPianoConvolver);
      delayFilter.connect(feedback);
      feedback.connect(delay);
      return;
    }

    sendGain.connect(skyPianoConvolver);
  };

  let releaseSeconds = 0.45;
  let autoStopAfter = 1.35;

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(3200, now);
  filter.Q.value = 1.2;
  voiceGain.gain.setValueAtTime(0.0001, now);

  if (sampleConfig || getRealMultiInstrumentPresetConfig(instrument.id)) {
    warmupMultiInstrumentSample(instrument.id);
  }

  if (realPreset && multiWebAudioFontPlayer) {
    const midiPitch = frequencyToMidiPitch(note.freq);
    const duration = options.sustain
      ? 8
      : (instrument.id === "piano" ? 2.8 : instrument.id === "ocarina" ? 2.45 : 3.4);
    const volume = instrument.id === "piano"
      ? Math.min(0.72, 0.32 + (state.audio.musicVolume * 0.44))
      : instrument.id === "ocarina"
        ? Math.min(0.54, 0.22 + (state.audio.musicVolume * 0.28))
        : Math.min(0.62, 0.26 + (state.audio.musicVolume * 0.38));

    switch (instrument.id) {
      case "piano":
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(4800, now);
        filter.frequency.exponentialRampToValueAtTime(2100, now + 0.8);
        filter.Q.value = 1.3;
        voiceGain.gain.setValueAtTime(0.0001, now);
        voiceGain.gain.exponentialRampToValueAtTime(1, now + 0.01);
        releaseSeconds = 0.75;
        break;
      case "violin":
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(3000, now);
        filter.frequency.exponentialRampToValueAtTime(2350, now + 0.9);
        filter.Q.value = 1.2;
        addAmbienceSend(0.5, 0.072, 0.18);
        voiceGain.gain.setValueAtTime(0.0001, now);
        voiceGain.gain.exponentialRampToValueAtTime(1.02, now + 0.018);
        voiceGain.gain.linearRampToValueAtTime(0.94, now + 0.075);
        releaseSeconds = 0.55;
        break;
      case "panflute":
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(1450, now);
        filter.Q.value = 1.35;
        voiceGain.gain.setValueAtTime(0.0001, now);
        voiceGain.gain.linearRampToValueAtTime(0.84, now + 0.03);
        voiceGain.gain.linearRampToValueAtTime(options.sustain ? 0.72 : 0.68, now + 0.18);
        releaseSeconds = options.sustain ? 0.44 : 0.72;
        break;
      case "ocarina":
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(2450, now);
        filter.frequency.exponentialRampToValueAtTime(1750, now + 0.62);
        filter.Q.value = 0.92;
        addAmbienceSend(0.12, 0.028, 0.045);
        voiceGain.gain.setValueAtTime(0.0001, now);
        voiceGain.gain.linearRampToValueAtTime(0.9, now + 0.04);
        voiceGain.gain.linearRampToValueAtTime(options.sustain ? 0.76 : 0.68, now + 0.2);
        releaseSeconds = options.sustain ? 0.5 : 0.72;
        break;
      default:
        voiceGain.gain.setValueAtTime(1, now);
        break;
    }

    let envelope = null;
    try {
      envelope = multiWebAudioFontPlayer.queueWaveTable(
        toneContext,
        mixer,
        realPreset,
        now,
        midiPitch,
        duration,
        volume,
      );
    } catch {
      envelope = null;
    }

    if (envelope) {
      let stopped = false;
      const stop = (overrideRelease = releaseSeconds) => {
        if (stopped) return;
        stopped = true;

        const stopAt = toneContext.currentTime;
        const safeRelease = Math.max(0.05, Number(overrideRelease || releaseSeconds));

        try {
          voiceGain.gain.cancelScheduledValues(stopAt);
          voiceGain.gain.setValueAtTime(Math.max(voiceGain.gain.value, 0.0001), stopAt);
          voiceGain.gain.exponentialRampToValueAtTime(0.0001, stopAt + safeRelease);
        } catch {
          // ignore fast release scheduling issues
        }

        try {
          envelope.cancel?.(stopAt + safeRelease + 0.02);
        } catch {
          // ignore envelope cancel issues
        }
      };

      if (!options.sustain && duration > 0) {
        window.setTimeout(() => {
          stop(releaseSeconds);
        }, Math.max(120, Math.round((duration + 0.08) * 1000)));
      }

      return {
        stop,
        instrumentId: instrument.id,
        noteId: note.id,
      };
    }
  }

  if (sampleConfig && sampleEntry?.status === "ready" && sampleEntry.buffer) {
    const source = toneContext.createBufferSource();
    source.buffer = sampleEntry.buffer;
    source.playbackRate.setValueAtTime(note.freq / sampleConfig.rootFreq, now);
    source.loop = Boolean(sampleConfig.loop && options.sustain);

    if (source.loop) {
      source.loopStart = Number(sampleConfig.loopStart || 0.18);
      source.loopEnd = Number(sampleConfig.loopEnd || Math.max(source.loopStart + 0.2, sampleEntry.buffer.duration - 0.05));
    }

    source.connect(mixer);
    extraSources.push(source);

    switch (instrument.id) {
      case "piano":
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(4700, now);
        filter.frequency.exponentialRampToValueAtTime(1900, now + 0.75);
        filter.Q.value = 1.4;
        addNoiseBurst({ type: "highpass", frequency: 2600, q: 0.75, peak: 0.01, attack: 0.003, decay: 0.04, duration: 0.16 });
        voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.052, toneLevel * 1.45), now + 0.008);
        voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.015, toneLevel * 0.42), now + 0.16);
        voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
        releaseSeconds = 0.75;
        autoStopAfter = 1.52;
        break;
      case "violin":
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(3600, now);
        filter.frequency.exponentialRampToValueAtTime(2600, now + 0.58);
        filter.Q.value = 2.1;
        addPlaybackVibrato(source.playbackRate, 5.1, 0.007);
        addBreathNoise(0.0045, Math.max(900, note.freq * 3.1));
        voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.04, toneLevel * 1.12), now + 0.018);
        voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.029, toneLevel * 0.94), now + 0.082);
        if (!options.sustain) {
          voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.9);
        }
        releaseSeconds = 0.36;
        autoStopAfter = options.sustain ? 0 : 1.92;
        break;
      case "panflute":
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(1450, now);
        filter.Q.value = 1.45;
        addPlaybackVibrato(source.playbackRate, 4.05, 0.003);
        addBreathNoise(0.0065, Math.max(900, note.freq * 4.3));
        voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.034, toneLevel * 0.98), now + 0.03);
        voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.012, toneLevel * (options.sustain ? 0.42 : 0.32)), now + 0.22);
        if (!options.sustain) {
          voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.88);
        }
        releaseSeconds = options.sustain ? 0.42 : 0.58;
        autoStopAfter = options.sustain ? 0 : 0.92;
        break;
      case "triangle":
      default:
        filter.type = "highpass";
        filter.frequency.setValueAtTime(1800, now);
        filter.Q.value = 0.9;
        addNoiseBurst({ type: "bandpass", frequency: 4200, q: 4.8, peak: 0.008, attack: 0.003, decay: 0.1, duration: 0.22 });
        voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.04, toneLevel * 1.18), now + 0.006);
        voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.01, toneLevel * 0.2), now + 0.28);
        voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.95);
        releaseSeconds = 1.06;
        autoStopAfter = 1.96;
        break;
    }

    source.start(now);

    let stopped = false;
    const stop = (overrideRelease = releaseSeconds) => {
      if (stopped) return;
      stopped = true;

      const stopAt = toneContext.currentTime;
      const safeRelease = Math.max(0.05, Number(overrideRelease || releaseSeconds));

      try {
        voiceGain.gain.cancelScheduledValues(stopAt);
        voiceGain.gain.setValueAtTime(Math.max(voiceGain.gain.value, 0.0001), stopAt);
        voiceGain.gain.exponentialRampToValueAtTime(0.0001, stopAt + safeRelease);
      } catch {
        // ignore fast release scheduling issues
      }

      extraSources.forEach((node) => {
        try {
          node.stop(stopAt + safeRelease + 0.08);
        } catch {
          // source may already be stopped
        }
      });
    };

    if (!options.sustain && autoStopAfter > 0) {
      window.setTimeout(() => {
        stop(releaseSeconds);
      }, Math.max(120, Math.round((autoStopAfter + 0.08) * 1000)));
    }

    return {
      stop,
      instrumentId: instrument.id,
      noteId: note.id,
    };
  }

  switch (instrument.id) {
    case "piano": {
      addOscillator([1, 0.78, 0.42, 0.24, 0.14, 0.08], note.freq, 0.56, -2.5);
      addOscillator([1, 0.78, 0.42, 0.24, 0.14, 0.08], note.freq, 0.34, 3.2);
      addOscillator("sine", note.freq * 2, 0.11);
      addOscillator("sine", note.freq * 0.5, 0.06);
      addNoiseBurst({ type: "highpass", frequency: 2400, q: 0.7, peak: 0.015, attack: 0.003, decay: 0.05, duration: 0.18 });
      filter.frequency.setValueAtTime(4600, now);
      filter.frequency.exponentialRampToValueAtTime(1800, now + 0.7);
      filter.Q.value = 1.6;
      voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.05, toneLevel * 1.5), now + 0.006);
      voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.016, toneLevel * 0.44), now + 0.14);
      voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.45);
      releaseSeconds = 0.72;
      autoStopAfter = 1.48;
      break;
    }
    case "violin": {
      const bow = addOscillator([1, 0.82, 0.58, 0.41, 0.29, 0.21, 0.15], note.freq, 0.34, -4);
      const edge = addOscillator([1, 0.71, 0.49, 0.34, 0.24, 0.17], note.freq, 0.26, 4);
      addOscillator("sine", note.freq * 2, 0.08);
      addBreathNoise(0.006, Math.max(1000, note.freq * 3.6));
      addVibrato([bow, edge], 5.15, Math.max(2.2, note.freq * 0.0048));
      addAmbienceSend(0.48, 0.07, 0.16);
      filter.frequency.setValueAtTime(3000, now);
      filter.frequency.exponentialRampToValueAtTime(2250, now + 0.7);
      filter.Q.value = 1.45;
      voiceGain.gain.linearRampToValueAtTime(Math.max(0.04, toneLevel * 1.12), now + 0.02);
      voiceGain.gain.linearRampToValueAtTime(Math.max(0.03, toneLevel * 0.94), now + 0.075);
      if (!options.sustain) {
        voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.05);
      }
      releaseSeconds = 0.5;
      autoStopAfter = options.sustain ? 0 : 2.0;
      break;
    }
    case "panflute": {
      const main = addOscillator("sine", note.freq, 0.72);
      const overtone = addOscillator("sine", note.freq * 2, 0.11);
      addOscillator([1, 0.1, 0.025], note.freq, 0.12, 2.5);
      addBreathNoise(0.007, Math.max(850, note.freq * 4.2));
      addNoiseBurst({ type: "bandpass", frequency: Math.max(900, note.freq * 3.6), q: 1.6, peak: 0.0045, attack: 0.004, decay: 0.055, duration: 0.16 });
      addVibrato([main, overtone], 4.05, Math.max(0.7, note.freq * 0.0019));
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.value = 1.5;
      voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.032, toneLevel * 0.95), now + 0.025);
      voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.011, toneLevel * (options.sustain ? 0.4 : 0.3)), now + 0.2);
      if (!options.sustain) {
        voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.84);
      }
      releaseSeconds = options.sustain ? 0.42 : 0.55;
      autoStopAfter = options.sustain ? 0 : 0.88;
      break;
    }
    case "ocarina": {
      const body = addOscillator("sine", note.freq, 0.84);
      const shimmer = addOscillator("triangle", note.freq * 1.0025, 0.045);
      const overtone = addOscillator("sine", note.freq * 2, 0.05);
      addNoiseBurst({ type: "bandpass", frequency: Math.max(760, note.freq * 2.7), q: 3.1, peak: 0.0022, attack: 0.006, decay: 0.05, duration: 0.12 });
      addBreathNoise(0.0022, Math.max(650, note.freq * 2.6));
      addVibrato([body, shimmer, overtone], 4.1, Math.max(0.16, note.freq * 0.00055));
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2150, now);
      filter.frequency.exponentialRampToValueAtTime(1650, now + 0.46);
      filter.Q.value = 0.95;
      voiceGain.gain.linearRampToValueAtTime(Math.max(0.029, toneLevel * 0.82), now + 0.038);
      voiceGain.gain.linearRampToValueAtTime(Math.max(0.012, toneLevel * (options.sustain ? 0.36 : 0.28)), now + 0.18);
      if (!options.sustain) {
        voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.08);
      }
      releaseSeconds = options.sustain ? 0.42 : 0.58;
      autoStopAfter = options.sustain ? 0 : 1.12;
      break;
    }
    case "triangle":
    default: {
      addOscillator("sine", note.freq * 1.0, 0.52);
      addOscillator("sine", note.freq * 2.92, 0.26);
      addOscillator("sine", note.freq * 4.15, 0.15);
      addOscillator("sine", note.freq * 6.8, 0.08);
      addNoiseBurst({ type: "bandpass", frequency: 4100, q: 5.4, peak: 0.012, attack: 0.003, decay: 0.12, duration: 0.28 });
      filter.type = "highpass";
      filter.frequency.setValueAtTime(1800, now);
      filter.Q.value = 0.85;
      voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.042, toneLevel * 1.22), now + 0.004);
      voiceGain.gain.exponentialRampToValueAtTime(Math.max(0.011, toneLevel * 0.24), now + 0.24);
      voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.9);
      releaseSeconds = 1.04;
      autoStopAfter = 1.95;
      break;
    }
  }

  oscillators.forEach(({ node }) => {
    node.start(now);
  });
  extraSources.forEach((node) => {
    node.start(now);
  });

  let stopped = false;
  const stop = (overrideRelease = releaseSeconds) => {
    if (stopped) return;
    stopped = true;

    const stopAt = toneContext.currentTime;
    const safeRelease = Math.max(0.05, Number(overrideRelease || releaseSeconds));

    try {
      voiceGain.gain.cancelScheduledValues(stopAt);
      voiceGain.gain.setValueAtTime(Math.max(voiceGain.gain.value, 0.0001), stopAt);
      voiceGain.gain.exponentialRampToValueAtTime(0.0001, stopAt + safeRelease);
    } catch {
      // ignore fast release scheduling issues
    }

    oscillators.forEach(({ node }) => {
      try {
        node.stop(stopAt + safeRelease + 0.08);
      } catch {
        // oscillator may already be stopped
      }
    });

    extraSources.forEach((node) => {
      try {
        node.stop(stopAt + safeRelease + 0.08);
      } catch {
        // source may already be stopped
      }
    });
  };

  if (!options.sustain && autoStopAfter > 0) {
    window.setTimeout(() => {
      stop(releaseSeconds);
    }, Math.max(120, Math.round((autoStopAfter + 0.08) * 1000)));
  }

  return {
    stop,
    instrumentId: instrument.id,
    noteId: note.id,
  };
}

function startHeldMultiNote(noteId, options = {}) {
  const { shouldBroadcast = false, instrumentId = state.audio.multiInstrument, voiceId = "" } = options;
  const note = MULTI_MUSIC_NOTES.find((entry) => entry.id === noteId);
  if (!note) return "";

  const instrument = getCurrentMultiInstrument(instrumentId);
  if (!instrument.sustain) {
    playMultiMusicNote(noteId, shouldBroadcast, instrument.id);
    return "";
  }

  const actualVoiceId = voiceId || createRealtimeId("music-hold");
  const toneContext = ensureSkyToneContext(shouldBroadcast || isMultiScreenActive());
  const canPlayHere = Boolean(
    isMultiScreenActive()
    && toneContext
    && skyPianoMasterGain
    && !state.audio.mutedAll
    && state.audio.musicEnabled
    && state.audio.musicVolume > 0
  );

  if (canPlayHere) {
    const voice = createMultiInstrumentVoice(toneContext, note, instrument.id, { sustain: true });
    if (voice) {
      state.multi.activeMusicVoices[actualVoiceId] = {
        ...voice,
        voiceId: actualVoiceId,
        noteId,
        instrumentId: instrument.id,
      };
    }
  }

  if (isMultiScreenActive()) {
    el.skyPianoGrid?.querySelectorAll(`[data-note="${noteId}"]`).forEach((button) => {
      button.classList.add("is-held");
    });

    if (el.multiMusicHint) {
      el.multiMusicHint.textContent = `${note.label} au ${instrument.label} dans le salon.`;
    }
    setSkyPianoStatus(`${note.label} · ${instrument.label.toLowerCase()} maintenu dans le salon.`);
  }

  if (shouldBroadcast) {
    sendMultiRealtimeEvent({
      type: "music-note-start",
      noteId,
      instrument: instrument.id,
      voiceId: actualVoiceId,
    }, false).catch(() => {
      if (el.multiMusicHint) {
        el.multiMusicHint.textContent = `${note.label} a joué localement, mais l'envoi a raté.`;
      }
    });
  }

  return actualVoiceId;
}

function stopHeldMultiNote(voiceId, shouldBroadcast = false) {
  const safeVoiceId = String(voiceId || "").trim();
  if (!safeVoiceId) return;

  const activeVoice = state.multi.activeMusicVoices[safeVoiceId];
  const noteId = activeVoice?.noteId || "";

  try {
    const releaseTime = activeVoice?.instrumentId === "violin"
      ? 0.28
      : (activeVoice?.instrumentId === "panflute" || activeVoice?.instrumentId === "ocarina")
        ? 0.34
        : 0.18;
    activeVoice?.stop?.(releaseTime);
  } catch {
    // ignore stop errors for already released voices
  }

  delete state.multi.activeMusicVoices[safeVoiceId];

  Object.keys(state.multi.localHeldNotes).forEach((heldNoteId) => {
    if (state.multi.localHeldNotes[heldNoteId] === safeVoiceId) {
      delete state.multi.localHeldNotes[heldNoteId];
    }
  });

  const stillPlayingSameNote = noteId && Object.values(state.multi.activeMusicVoices).some((entry) => entry?.noteId === noteId);
  if (noteId && !stillPlayingSameNote) {
    releaseMultiButtonState(noteId);
  }

  if (shouldBroadcast) {
    sendMultiRealtimeEvent({ type: "music-note-stop", voiceId: safeVoiceId }, false).catch(() => {});
  }
}

function releaseAllLocalMultiNotes(shouldBroadcast = false) {
  const heldVoiceIds = [...new Set(Object.values(state.multi.localHeldNotes).filter(Boolean))];
  heldVoiceIds.forEach((voiceId) => {
    stopHeldMultiNote(voiceId, shouldBroadcast);
  });
  state.multi.localHeldNotes = {};
  releaseMultiButtonState();
}

function renderSkyPiano() {
  if (!el.skyPianoGrid) return;

  el.skyPianoGrid.innerHTML = "";

  SKY_PIANO_LAYOUT.forEach((binding) => {
    const noteData = MULTI_MUSIC_NOTES.find((entry) => entry.id === binding.noteId);
    if (!noteData) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "sky-piano-key";
    button.dataset.note = noteData.id;
    button.dataset.noteLabel = noteData.label;
    button.dataset.noteFreq = String(noteData.freq);
    button.dataset.keyLabel = binding.keyLabel;
    button.setAttribute("aria-label", `${noteData.label} — clavier ${binding.keyLabel}`);
    button.innerHTML = `
      <strong class="sky-piano-note">${noteData.name}</strong>
      <small class="sky-piano-octave">${noteData.label}</small>
      <span class="sky-piano-keybind">${binding.keyLabel}</span>
    `;
    el.skyPianoGrid.appendChild(button);
  });

  updateMultiInstrumentButtons();
  setSkyPianoStatus(getMultiInstrumentReadyMessage());
}

function toggleSkyPiano(forceOpen) {
  if (!el.skyPianoPanel || !el.btnToggleSkyPiano) return;

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : el.skyPianoPanel.hidden;
  state.audio.skyPianoOpen = shouldOpen;
  el.skyPianoPanel.hidden = !shouldOpen;
  el.btnToggleSkyPiano.setAttribute("aria-expanded", String(shouldOpen));
  el.btnToggleSkyPiano.textContent = shouldOpen ? "Fermer la musique" : "Musique";

  if (shouldOpen) {
    MULTI_INSTRUMENTS.forEach((entry) => warmupMultiInstrumentSample(entry.id));
    renderSkyPiano();
    updateSkyPianoMobileHint();
    requestSkyPianoLandscape();
    return;
  }

  toggleMultiInstrumentMenu(false);
  releaseAllLocalMultiNotes(true);
  releaseSkyPianoLandscape();
}

function triggerSkyPianoNote(button, source = "toucher", options = {}) {
  if (!button) return "";

  const noteId = String(button.dataset.note || "");
  if (!noteId) return "";

  const instrument = getCurrentMultiInstrument();
  const noteLabel = button.dataset.noteLabel || "Note";
  const forceOneShot = Boolean(options.forceOneShot);

  if (instrument.sustain && !forceOneShot) {
    const existingVoiceId = state.multi.localHeldNotes[noteId];
    if (existingVoiceId) return existingVoiceId;

    const voiceId = startHeldMultiNote(noteId, {
      shouldBroadcast: true,
      instrumentId: instrument.id,
    });

    if (voiceId) {
      state.multi.localHeldNotes[noteId] = voiceId;
      button.dataset.activeVoiceId = voiceId;
    }

    setSkyPianoStatus(`${noteLabel} · ${instrument.label.toLowerCase()} maintenu au ${source}.`);
    return voiceId;
  }

  flashSkyPianoButton(button);
  setSkyPianoStatus(`${noteLabel} · ${instrument.label.toLowerCase()} joué au ${source}.`);
  playMultiMusicNote(noteId, true, instrument.id);
  return "";
}

function releaseSkyPianoNote(button) {
  if (!button) return;

  const noteId = String(button.dataset.note || "");
  const voiceId = String(button.dataset.activeVoiceId || "").trim();
  if (!voiceId) return;

  delete button.dataset.activeVoiceId;
  if (noteId) {
    delete state.multi.localHeldNotes[noteId];
  }

  stopHeldMultiNote(voiceId, true);
  setSkyPianoStatus(getMultiInstrumentReadyMessage());
}

function getSkyKeyboardBinding(event) {
  if (!event) return null;

  const typedKey = typeof event.key === "string" ? event.key : "";
  const aliasMatch = SKY_PIANO_LAYOUT.find((binding) => binding.aliases.includes(typedKey));
  if (aliasMatch) {
    return aliasMatch;
  }

  return SKY_PIANO_LAYOUT.find((binding) => {
    const isLetterKey = /^[A-Z]$/.test(binding.keyLabel);
    return isLetterKey && binding.codes.includes(event.code);
  }) || null;
}

function isTypingField(target) {
  if (!target) return false;
  const tagName = typeof target.tagName === "string" ? target.tagName.toUpperCase() : "";
  return target.isContentEditable || tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT";
}

function isMobileSkyPianoMode() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
}

async function requestSkyPianoLandscape() {
  if (!el.skyPianoPanel || !isMobileSkyPianoMode()) return;

  document.body.classList.add("sky-piano-open");

  try {
    if (!document.fullscreenElement && el.skyPianoPanel.requestFullscreen) {
      await el.skyPianoPanel.requestFullscreen();
    }
  } catch {
    // fullscreen can be refused on some mobile browsers
  }

  try {
    if (screen.orientation?.lock) {
      await screen.orientation.lock("landscape");
    }
  } catch {
    // orientation lock may be unavailable or blocked by the browser
  }
}

async function releaseSkyPianoLandscape() {
  document.body.classList.remove("sky-piano-open");

  try {
    if (screen.orientation?.unlock) {
      screen.orientation.unlock();
    }
  } catch {
    // orientation unlock may be unavailable
  }

  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
    }
  } catch {
    // ignore fullscreen exit failures
  }
}

function updateSkyPianoMobileHint() {
  if (!el.skyPianoStatus || !state.audio.skyPianoOpen || !isMobileSkyPianoMode()) return;

  const inPortrait = typeof window !== "undefined"
    && typeof window.matchMedia === "function"
    && window.matchMedia("(orientation: portrait)").matches;

  if (inPortrait) {
    el.skyPianoStatus.textContent = "Tourne le téléphone en paysage pour jouer plus confortablement.";
  }
}

function setupMusicScreen() {
  refreshMusicUI();
  renderSkyPiano();
  toggleSkyPiano(state.audio.skyPianoOpen);
  updatePlaylistStatus("Choisis une musique ou crée une playlist pour t'organiser.");

  el.btnStartMusic.addEventListener("click", (event) => {
    event.preventDefault();
    fadeTo(() => {
      setActiveScreen("music");
      refreshMusicUI();
    });
  });

  el.btnToggleSkyPiano?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleSkyPiano();
  });

  el.btnCloseSkyPiano?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleSkyPiano(false);
  });

  window.addEventListener("orientationchange", updateSkyPianoMobileHint);
  window.addEventListener("resize", updateSkyPianoMobileHint);
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      document.body.classList.remove("sky-piano-open");
    }
  });

  el.skyKeySelect?.addEventListener("change", (event) => {
    state.audio.skyKey = event.target.value || "C";
    renderSkyPiano();
  });

  el.skyPianoGrid?.addEventListener("pointerdown", (event) => {
    const button = event.target.closest(".sky-piano-key");
    if (!button) return;
    event.preventDefault();
    button.setPointerCapture?.(event.pointerId);
    triggerSkyPianoNote(button, "toucher");
  });

  const releasePointerNote = (event) => {
    const button = event.target.closest(".sky-piano-key");
    if (!button) return;
    releaseSkyPianoNote(button);
  };

  el.skyPianoGrid?.addEventListener("pointerup", releasePointerNote);
  el.skyPianoGrid?.addEventListener("pointercancel", releasePointerNote);

  el.skyPianoGrid?.addEventListener("click", (event) => {
    const button = event.target.closest(".sky-piano-key");
    if (!button || event.detail > 0) return;
    event.preventDefault();
    triggerSkyPianoNote(button, "clavier", { forceOneShot: true });
    releaseSkyPianoNote(button);
  });

  el.btnToggleMultiInstrumentMenu?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleMultiInstrumentMenu();
  });

  el.multiInstrumentMenu?.addEventListener("click", (event) => {
    if (!event.target.closest("[data-multi-instrument]")) {
      event.preventDefault();
      event.stopPropagation();
      toggleMultiInstrumentMenu(false);
    }
  });

  Array.from(el.multiInstrumentButtons || []).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setMultiInstrument(button.dataset.multiInstrument);
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (!el.multiInstrumentPicker?.contains(event.target)) {
      toggleMultiInstrumentMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleMultiInstrumentMenu(false);
    }
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
    if (el.screenMusic?.classList.contains("active") && !isTypingField(event.target) && !event.repeat) {
      const binding = getSkyKeyboardBinding(event);
      if (binding) {
        if (el.skyPianoPanel?.hidden) {
          toggleSkyPiano(true);
        }

        const button = el.skyPianoGrid?.querySelector(`[data-note-index="${binding.noteIndex}"][data-key-label="${binding.keyLabel}"]`)
          || el.skyPianoGrid?.querySelector(`[data-note-index="${binding.noteIndex}"]`);

        if (button) {
          event.preventDefault();
          triggerSkyPianoNote(button, `clavier ${binding.keyLabel}`);
          return;
        }
      }
    }

    if (event.key !== "Escape") return;
    closeCreatePlaylistModal();
    closePlaylistTrackPicker();
    closeMultiChatDrawer();
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

function createRealtimeId(prefix = "evt") {
  return typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? `${prefix}-${crypto.randomUUID()}`
    : `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function rememberMultiEventId(eventId) {
  const safeId = String(eventId || "").trim();
  if (!safeId) return false;
  if (state.multi.seenEventIds.includes(safeId)) return false;

  state.multi.seenEventIds.push(safeId);
  if (state.multi.seenEventIds.length > 220) {
    state.multi.seenEventIds.splice(0, state.multi.seenEventIds.length - 220);
  }

  return true;
}

function clearMultiCanvasSurface() {
  if (!el.multiCanvas) return;
  const ctx = el.multiCanvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, el.multiCanvas.width, el.multiCanvas.height);
  ctx.fillStyle = state.theme === "dark" ? "#0f1a2d" : "#fffdfd";
  ctx.fillRect(0, 0, el.multiCanvas.width, el.multiCanvas.height);

  ctx.save();
  ctx.strokeStyle = state.theme === "dark" ? "rgba(140, 187, 255, 0.12)" : "rgba(255, 79, 125, 0.1)";
  ctx.lineWidth = 1;
  const step = Math.max(26, Math.floor(el.multiCanvas.width / 20));
  for (let x = step; x < el.multiCanvas.width; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, el.multiCanvas.height);
    ctx.stroke();
  }
  for (let y = step; y < el.multiCanvas.height; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(el.multiCanvas.width, y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawMultiStrokePath(points, color = state.multi.brushColor, size = state.multi.brushSize) {
  if (!el.multiCanvas || !Array.isArray(points) || points.length < 2) return;
  const ctx = el.multiCanvas.getContext("2d");
  if (!ctx) return;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1.5, Number(size || 4)) * Math.max(window.devicePixelRatio || 1, 1);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(points[0].x * el.multiCanvas.width, points[0].y * el.multiCanvas.height);
  points.slice(1).forEach((point) => {
    ctx.lineTo(point.x * el.multiCanvas.width, point.y * el.multiCanvas.height);
  });
  ctx.stroke();
  ctx.restore();
}

function redrawMultiCanvasHistory() {
  clearMultiCanvasSurface();
  state.multi.canvasEvents.forEach((entry) => {
    if (entry?.type === "draw-stroke" || entry?.type === "draw-segment") {
      drawMultiStrokePath(entry.points, entry.color, entry.size);
    }
  });
}

function syncMultiCanvasSize() {
  if (!el.multiCanvas) return;

  const rect = el.multiCanvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const ratio = Math.max(window.devicePixelRatio || 1, 1);
  const nextWidth = Math.floor(rect.width * ratio);
  const nextHeight = Math.floor(rect.height * ratio);

  if (el.multiCanvas.width === nextWidth && el.multiCanvas.height === nextHeight) return;

  el.multiCanvas.width = nextWidth;
  el.multiCanvas.height = nextHeight;
  redrawMultiCanvasHistory();
}

function getNormalizedCanvasPoint(event) {
  if (!el.multiCanvas) return null;
  const point = event.touches?.[0] || event.changedTouches?.[0] || event;
  if (typeof point.clientX !== "number" || typeof point.clientY !== "number") return null;

  const rect = el.multiCanvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;

  const x = Math.max(0, Math.min(1, (point.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (point.clientY - rect.top) / rect.height));
  return { x, y };
}

function pruneInactiveMultiCanvasOwners(activeUsers = state.presence.users) {
  if (!Array.isArray(activeUsers) || !activeUsers.length) return;

  const activeOwnerIds = new Set();
  activeUsers.forEach((entry, index) => {
    const normalizedUser = normalizePresenceUser(entry, `presence-active-${index}`);
    if (normalizedUser?.clientId) {
      activeOwnerIds.add(normalizedUser.clientId);
    }
  });

  if (state.presence.sessionId) {
    activeOwnerIds.add(state.presence.sessionId);
  }

  const previousCount = state.multi.canvasEvents.length;
  state.multi.canvasEvents = state.multi.canvasEvents.filter((entry) => {
    if (!entry?.ownerSessionId) return true;
    return activeOwnerIds.has(entry.ownerSessionId);
  });

  if (state.multi.canvasEvents.length !== previousCount) {
    redrawMultiCanvasHistory();
  }
}

function clearOwnMultiCanvas(shouldBroadcast = true, reason = "manual") {
  const ownerSessionId = String(state.presence.sessionId || "").trim();
  if (!ownerSessionId) return;

  const clearTs = Date.now();
  state.multi.lastClearByOwner[ownerSessionId] = Math.max(
    Number(state.multi.lastClearByOwner[ownerSessionId] || 0),
    clearTs,
  );

  state.multi.drawing = false;
  state.multi.activeStroke = [];
  state.multi.pendingBroadcastPoints = [];
  state.multi.lastPoint = null;
  state.multi.activeTool = state.multi.tool;

  const previousCount = state.multi.canvasEvents.length;
  state.multi.canvasEvents = state.multi.canvasEvents.filter((entry) => entry?.ownerSessionId !== ownerSessionId);

  if (previousCount !== state.multi.canvasEvents.length || el.multiCanvas) {
    redrawMultiCanvasHistory();
  }

  if (shouldBroadcast && state.presence.nickname) {
    sendMultiRealtimeEvent({
      type: "clear-own-canvas",
      ownerSessionId,
      reason,
      ts: clearTs,
    }, false).catch(() => {});
  }
}

function eraseOwnMultiStroke(points, size = state.multi.brushSize, ownerSessionId = state.presence.sessionId) {
  if (!Array.isArray(points) || points.length < 2) return false;

  const safeOwnerSessionId = String(ownerSessionId || "").trim();
  if (!safeOwnerSessionId) return false;

  const smallestCanvasSide = Math.max(1, Math.min(el.multiCanvas?.width || 1200, el.multiCanvas?.height || 800));
  const eraserRadius = (Math.max(10, Number(size || 10)) * Math.max(window.devicePixelRatio || 1, 1) * 1.3) / smallestCanvasSide;
  const eraserRadiusSquared = eraserRadius * eraserRadius;

  const touchesStroke = (strokePoints = []) => strokePoints.some((strokePoint) => points.some((erasePoint) => {
    const dx = Number(strokePoint?.x || 0) - Number(erasePoint?.x || 0);
    const dy = Number(strokePoint?.y || 0) - Number(erasePoint?.y || 0);
    return (dx * dx) + (dy * dy) <= eraserRadiusSquared;
  }));

  const previousCount = state.multi.canvasEvents.length;
  state.multi.canvasEvents = state.multi.canvasEvents.filter((entry) => {
    if (!entry || entry.ownerSessionId !== safeOwnerSessionId) return true;
    if (entry.type !== "draw-stroke" && entry.type !== "draw-segment") return true;
    return !touchesStroke(entry.points);
  });

  if (state.multi.canvasEvents.length !== previousCount) {
    redrawMultiCanvasHistory();
    return true;
  }

  return false;
}

function renderMultiChatMessages() {
  if (!el.multiChatMessages) return;
  el.multiChatMessages.innerHTML = "";

  if (!state.multi.messages.length) {
    const empty = document.createElement("div");
    empty.className = "multi-chat-empty";
    empty.textContent = "Aucun message pour le moment. Lance la conversation ✨";
    el.multiChatMessages.appendChild(empty);
  } else {
    state.multi.messages.slice(-40).forEach((message) => {
      const row = document.createElement("article");
      row.className = "multi-chat-message";
      if (message.name === state.presence.nickname) {
        row.classList.add("you");
      }

      const meta = document.createElement("div");
      meta.className = "multi-chat-meta";

      const author = document.createElement("strong");
      author.textContent = message.name || "Visiteur";

      const time = document.createElement("span");
      time.textContent = new Date(message.ts || Date.now()).toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const text = document.createElement("div");
      text.className = "multi-chat-text";
      text.textContent = message.text;

      meta.append(author, time);
      row.append(meta, text);
      el.multiChatMessages.appendChild(row);
    });
  }

  el.multiChatMessages.scrollTop = el.multiChatMessages.scrollHeight;

  if (el.multiChatStatus) {
    el.multiChatStatus.textContent = state.multi.connected
      ? "Salon coopératif en direct." 
      : "Connexion du salon coopératif...";
  }
}

function closeMultiChatDrawer() {
  if (!el.multiChatDrawer) return;
  el.multiChatDrawer.classList.remove("open");
  el.multiChatDrawer.setAttribute("aria-hidden", "true");
  if (el.multiChatBackdrop) {
    el.multiChatBackdrop.hidden = true;
  }
  if (el.btnToggleMultiChat) {
    el.btnToggleMultiChat.setAttribute("aria-expanded", "false");
  }
  document.body.classList.remove("multi-chat-open");
}

function openMultiChatDrawer() {
  if (!el.multiChatDrawer) return;
  connectMultiRealtime();
  if (el.soundPanel) {
    el.soundPanel.hidden = true;
  }
  if (el.onlinePanel) {
    el.onlinePanel.hidden = true;
  }
  el.multiChatDrawer.classList.add("open");
  el.multiChatDrawer.setAttribute("aria-hidden", "false");
  if (el.multiChatBackdrop) {
    el.multiChatBackdrop.hidden = false;
  }
  if (el.btnToggleMultiChat) {
    el.btnToggleMultiChat.setAttribute("aria-expanded", "true");
  }
  document.body.classList.add("multi-chat-open");
  renderMultiChatMessages();
  requestAnimationFrame(() => {
    el.multiChatInput?.focus();
  });
}

function toggleMultiChatDrawer() {
  if (el.multiChatDrawer?.classList.contains("open")) {
    closeMultiChatDrawer();
    return;
  }
  openMultiChatDrawer();
}

async function sendMultiRealtimeEvent(payload, applyLocally = true) {
  if (!payload || typeof payload !== "object") return null;

  const eventPayload = {
    id: payload.id || createRealtimeId(payload.type || "multi"),
    room: MULTI_SHARED_ROOM,
    name: state.presence.nickname || "Invité",
    sessionId: state.presence.sessionId,
    ts: Date.now(),
    ...payload,
  };

  if (applyLocally) {
    applyMultiRealtimeEvent(eventPayload);
  } else {
    rememberMultiEventId(eventPayload.id);
  }

  const shouldUseMultiServer = state.presence.mode === "server" && shouldUsePresenceServer() && typeof fetch === "function";
  if (shouldUseMultiServer) {
    const response = await fetch(`${getPresenceBaseUrl()}/__multi/publish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventPayload),
      keepalive: !String(payload.type || "").startsWith("draw-"),
      mode: "cors",
    });

    if (!response.ok) {
      state.multi.connected = false;
      renderMultiChatMessages();
      throw new Error(`Multi server unavailable (${response.status})`);
    }

    state.multi.connected = true;
    renderMultiChatMessages();
    return eventPayload;
  }

  const sharedEvents = state.multi.sharedEvents || state.presence.peerDoc?.getArray?.("multi-events");
  if (!sharedEvents) {
    connectPresenceStream();
    throw new Error("Multi realtime room unavailable");
  }

  sharedEvents.push([eventPayload]);
  if (sharedEvents.length > 600) {
    sharedEvents.delete(0, sharedEvents.length - 600);
  }

  return eventPayload;
}

function ensureMultiToneContext(tryResume = false) {
  if (!multiToneContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      multiToneContext = new AudioCtx();
    }
  }

  if (tryResume && multiToneContext?.state === "suspended") {
    multiToneContext.resume().catch(() => {});
  }

  return multiToneContext;
}

function playMultiMusicNote(noteId, shouldBroadcast = false, instrumentId = state.audio.multiInstrument) {
  const note = MULTI_MUSIC_NOTES.find((entry) => entry.id === noteId);
  if (!note) return;

  const instrument = getCurrentMultiInstrument(instrumentId);
  const isInMulti = isMultiScreenActive();
  const toneContext = ensureSkyToneContext(shouldBroadcast || isInMulti);
  const canPlayHere = Boolean(
    isInMulti
    && toneContext
    && skyPianoMasterGain
    && !state.audio.mutedAll
    && state.audio.musicEnabled
    && state.audio.musicVolume > 0
  );

  if (canPlayHere) {
    createMultiInstrumentVoice(toneContext, note, instrument.id, { sustain: false });
  }

  if (isInMulti) {
    el.skyPianoGrid?.querySelectorAll("[data-note]").forEach((button) => {
      if (button.dataset.note !== noteId) return;
      flashSkyPianoButton(button);
    });

    setSkyPianoStatus(`${note.label} · ${instrument.label.toLowerCase()} partagé dans le salon.`);
  }

  if (shouldBroadcast) {
    sendMultiRealtimeEvent({ type: "music-note", noteId, instrument: instrument.id }, false).catch(() => {});
  }
}

function applyMultiRealtimeEvent(payload) {
  if (!payload || payload.room !== MULTI_SHARED_ROOM) return;
  if (!rememberMultiEventId(payload.id)) return;

  if (payload.type === "chat-message") {
    const text = String(payload.text || "").trim();
    if (!text) return;

    state.multi.messages.push({
      id: payload.id,
      name: sanitizeNickname(payload.name) || "Invité",
      text,
      ts: Number(payload.ts || Date.now()),
    });

    if (state.multi.messages.length > 60) {
      state.multi.messages.splice(0, state.multi.messages.length - 60);
    }

    renderMultiChatMessages();
    return;
  }

  if (payload.type === "draw-stroke" || payload.type === "draw-segment") {
    if (!Array.isArray(payload.points) || payload.points.length < 2) return;

    const ownerSessionId = String(payload.ownerSessionId || payload.sessionId || "").trim();
    const eventTs = Number(payload.ts || Date.now());
    const lastClearTs = Number(state.multi.lastClearByOwner[ownerSessionId] || 0);

    if (ownerSessionId && lastClearTs && eventTs <= lastClearTs) {
      return;
    }

    state.multi.canvasEvents.push({
      type: payload.type,
      points: payload.points,
      color: payload.color || state.multi.brushColor,
      size: Number(payload.size || state.multi.brushSize),
      ownerSessionId,
      ts: eventTs,
    });

    if (state.multi.canvasEvents.length > 500) {
      state.multi.canvasEvents.splice(0, state.multi.canvasEvents.length - 500);
    }

    drawMultiStrokePath(payload.points, payload.color, payload.size);
    return;
  }

  if (payload.type === "erase-stroke") {
    if (!Array.isArray(payload.points) || payload.points.length < 2) return;
    eraseOwnMultiStroke(payload.points, payload.size, payload.ownerSessionId || payload.sessionId || "");
    return;
  }

  if (payload.type === "clear-own-canvas") {
    const ownerSessionId = String(payload.ownerSessionId || payload.sessionId || "").trim();
    if (!ownerSessionId) return;

    const clearTs = Number(payload.ts || Date.now());
    state.multi.lastClearByOwner[ownerSessionId] = Math.max(
      Number(state.multi.lastClearByOwner[ownerSessionId] || 0),
      clearTs,
    );

    state.multi.canvasEvents = state.multi.canvasEvents.filter((entry) => entry.ownerSessionId !== ownerSessionId);

    if (ownerSessionId === state.presence.sessionId) {
      state.multi.drawing = false;
      state.multi.activeStroke = [];
      state.multi.pendingBroadcastPoints = [];
      state.multi.lastPoint = null;
      state.multi.activeTool = state.multi.tool;
    }

    redrawMultiCanvasHistory();
    return;
  }

  if (payload.type === "music-note-start") {
    const noteTs = Number(payload.ts || 0);
    if (noteTs && state.multi.historyCutoff && noteTs < state.multi.historyCutoff - 4000) {
      return;
    }

    startHeldMultiNote(payload.noteId, {
      shouldBroadcast: false,
      instrumentId: payload.instrument || "violin",
      voiceId: payload.voiceId || payload.id,
    });
    return;
  }

  if (payload.type === "music-note-stop") {
    stopHeldMultiNote(payload.voiceId || payload.id, false);
    return;
  }

  if (payload.type === "music-note") {
    const noteTs = Number(payload.ts || 0);
    if (noteTs && state.multi.historyCutoff && noteTs < state.multi.historyCutoff - 4000) {
      return;
    }

    playMultiMusicNote(payload.noteId, false, payload.instrument || "ocarina");
  }
}

function connectMultiServer(forceReconnect = false) {
  if (!state.presence.nickname || state.presence.mode !== "server" || typeof EventSource === "undefined") {
    return false;
  }

  if (!forceReconnect && state.multi.stream && state.multi.connected) {
    renderMultiChatMessages();
    return true;
  }

  clearMultiRetryTimer();

  if (state.multi.stream) {
    try {
      state.multi.stream.close();
    } catch {
      // ignore stream shutdown errors
    }
    state.multi.stream = null;
  }

  const connectToken = ++state.multi.connectToken;
  state.multi.historyCutoff = Date.now();
  const streamUrl = `${getPresenceBaseUrl()}/__multi?clientId=${encodeURIComponent(state.presence.sessionId)}&name=${encodeURIComponent(state.presence.nickname)}`;
  const stream = new EventSource(streamUrl);
  state.multi.stream = stream;
  state.multi.connected = false;
  renderMultiChatMessages();

  const scheduleReconnect = () => {
    if (state.multi.reconnectTimer) return;
    state.multi.reconnectTimer = window.setTimeout(() => {
      state.multi.reconnectTimer = 0;
      if (state.multi.connectToken !== connectToken) return;
      connectMultiRealtime(true);
    }, 2500);
  };

  stream.onopen = () => {
    if (state.multi.connectToken !== connectToken) return;
    clearMultiRetryTimer();
    state.multi.connected = true;
    renderMultiChatMessages();
  };

  stream.onmessage = (event) => {
    if (state.multi.connectToken !== connectToken) return;

    try {
      const payload = JSON.parse(event.data);
      if (payload?.type === "multi-ready") {
        state.multi.connected = true;
        renderMultiChatMessages();
        return;
      }

      if (payload && typeof payload === "object") {
        applyMultiRealtimeEvent(payload);
        state.multi.connected = true;
        renderMultiChatMessages();
      }
    } catch {
      // ignore malformed multi payloads
    }
  };

  stream.onerror = () => {
    if (state.multi.connectToken !== connectToken) return;

    state.multi.connected = false;
    renderMultiChatMessages();

    try {
      stream.close();
    } catch {
      // ignore stream close errors
    }

    if (state.multi.stream === stream) {
      state.multi.stream = null;
    }

    if (state.presence.mode === "server") {
      scheduleReconnect();
    }
  };

  return true;
}

function connectMultiRealtime(forceReconnect = false) {
  if (!state.presence.nickname) {
    state.multi.connected = false;
    renderMultiChatMessages();
    return;
  }

  if (state.presence.mode === "server") {
    if (state.multi.sharedEvents && state.multi.sharedObserver) {
      try {
        state.multi.sharedEvents.unobserve(state.multi.sharedObserver);
      } catch {
        // ignore shared observer cleanup errors
      }
    }
    state.multi.sharedEvents = null;
    state.multi.sharedObserver = null;
    state.multi.sharedBoundDoc = null;

    if (connectMultiServer(forceReconnect)) {
      return;
    }
  }

  if (!state.presence.peerDoc) {
    if (forceReconnect || !state.presence.connected) {
      connectPresenceStream();
    }
    state.multi.connected = false;
    renderMultiChatMessages();
    return;
  }

  const sharedEvents = state.presence.peerDoc.getArray("multi-events");
  if (!forceReconnect && state.multi.sharedEvents === sharedEvents && state.multi.sharedBoundDoc === state.presence.peerDoc) {
    state.multi.connected = true;
    renderMultiChatMessages();
    return;
  }

  if (state.multi.sharedEvents && state.multi.sharedObserver) {
    try {
      state.multi.sharedEvents.unobserve(state.multi.sharedObserver);
    } catch {
      // ignore shared observer cleanup errors
    }
  }

  state.multi.sharedEvents = sharedEvents;
  state.multi.sharedBoundDoc = state.presence.peerDoc;
  state.multi.connected = true;
  state.multi.historyCutoff = Date.now();

  sharedEvents.toArray().forEach((payload) => {
    if (payload && typeof payload === "object") {
      applyMultiRealtimeEvent(payload);
    }
  });

  state.multi.sharedObserver = (event) => {
    event.changes.added.forEach((item) => {
      item.content.getContent().forEach((payload) => {
        if (payload && typeof payload === "object") {
          applyMultiRealtimeEvent(payload);
        }
      });
    });
    renderMultiChatMessages();
  };

  sharedEvents.observe(state.multi.sharedObserver);
  renderMultiChatMessages();
}

function flushPendingMultiStrokeBroadcast(forceSend = false) {
  const pendingPoints = Array.isArray(state.multi.pendingBroadcastPoints)
    ? state.multi.pendingBroadcastPoints.filter(Boolean)
    : [];

  if (pendingPoints.length < 2) return;

  const now = Date.now();
  if (!forceSend && now - state.multi.lastBroadcastAt < 55 && pendingPoints.length < 4) {
    return;
  }

  const activeTool = state.multi.activeTool || state.multi.tool || "brush";
  const effectiveSize = activeTool === "eraser"
    ? Math.max(10, Number(state.multi.brushSize || 4) + 6)
    : state.multi.brushSize;

  state.multi.lastBroadcastAt = now;
  sendMultiRealtimeEvent({
    type: activeTool === "eraser" ? "erase-stroke" : "draw-stroke",
    points: pendingPoints.map((entry) => ({
      x: Number(entry.x.toFixed(4)),
      y: Number(entry.y.toFixed(4)),
    })),
    color: state.multi.brushColor,
    size: effectiveSize,
    ownerSessionId: state.presence.sessionId,
  }, false).catch(() => {});

  state.multi.pendingBroadcastPoints = [pendingPoints[pendingPoints.length - 1]];
}

function setupMultiCanvas() {
  if (!el.multiCanvas) return;

  const normalizeColorHex = (value, fallback = state.multi.brushColor || "#FF4F7D") => {
    const raw = String(value || "").trim();
    if (!raw) return String(fallback || "#FF4F7D").toUpperCase();
    const cleaned = raw.startsWith("#") ? raw : `#${raw}`;
    return /^#[0-9a-fA-F]{6}$/.test(cleaned)
      ? cleaned.toUpperCase()
      : String(fallback || "#FF4F7D").toUpperCase();
  };

  const hsvToRgb = (h, s, v) => {
    const hue = ((Number(h) % 360) + 360) % 360;
    const chroma = v * s;
    const segment = hue / 60;
    const x = chroma * (1 - Math.abs((segment % 2) - 1));
    let red = 0;
    let green = 0;
    let blue = 0;

    if (segment >= 0 && segment < 1) {
      red = chroma;
      green = x;
    } else if (segment < 2) {
      red = x;
      green = chroma;
    } else if (segment < 3) {
      green = chroma;
      blue = x;
    } else if (segment < 4) {
      green = x;
      blue = chroma;
    } else if (segment < 5) {
      red = x;
      blue = chroma;
    } else {
      red = chroma;
      blue = x;
    }

    const match = v - chroma;
    return [
      Math.round((red + match) * 255),
      Math.round((green + match) * 255),
      Math.round((blue + match) * 255),
    ];
  };

  const rgbToHex = (red, green, blue) => `#${[red, green, blue]
    .map((value) => Math.max(0, Math.min(255, Number(value || 0))).toString(16).padStart(2, "0"))
    .join("")}`.toUpperCase();

  const drawMultiColorWheel = () => {
    if (!el.multiColorWheelCanvas) return;

    const canvas = el.multiColorWheelCanvas;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const logicalSize = Math.max(240, Math.min(window.innerWidth - 44, 320));
    const pixelSize = Math.floor(logicalSize * ratio);

    canvas.style.width = `${logicalSize}px`;
    canvas.style.height = `${logicalSize}px`;

    if (canvas.width !== pixelSize || canvas.height !== pixelSize) {
      canvas.width = pixelSize;
      canvas.height = pixelSize;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = ctx.createImageData(canvas.width, canvas.height);
    const { data } = image;
    const center = canvas.width / 2;
    const radius = center - (2 * ratio);

    for (let y = 0; y < canvas.height; y += 1) {
      for (let x = 0; x < canvas.width; x += 1) {
        const dx = x - center;
        const dy = y - center;
        const distance = Math.sqrt((dx * dx) + (dy * dy));
        const offset = (y * canvas.width + x) * 4;

        if (distance > radius) {
          data[offset + 3] = 0;
          continue;
        }

        const hue = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;
        const value = Math.min(1, Math.max(0, distance / radius));
        const [red, green, blue] = hsvToRgb(hue, 1, value);

        data[offset] = red;
        data[offset + 1] = green;
        data[offset + 2] = blue;
        data[offset + 3] = 255;
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(image, 0, 0);
    ctx.save();
    ctx.strokeStyle = "rgba(10, 14, 18, 0.72)";
    ctx.lineWidth = Math.max(2, ratio * 2);
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  };

  const setSelectedMultiColor = (value, { forceSync = false, switchToBrush = false } = {}) => {
    const safeColor = normalizeColorHex(value, state.multi.brushColor);
    state.multi.brushColor = safeColor;
    if (switchToBrush) {
      state.multi.tool = "brush";
    }

    if (el.multiCanvasColor && (forceSync || el.multiCanvasColor.value.toUpperCase() !== safeColor)) {
      el.multiCanvasColor.value = safeColor;
    }

    if (el.multiCanvasColorHex && (forceSync || document.activeElement !== el.multiCanvasColorHex)) {
      el.multiCanvasColorHex.value = safeColor;
    }

    if (el.multiColorModalHex && (forceSync || document.activeElement !== el.multiColorModalHex)) {
      el.multiColorModalHex.value = safeColor;
    }

    if (el.multiColorWheelCore) {
      el.multiColorWheelCore.style.background = safeColor;
    }

    if (el.multiColorPreview) {
      el.multiColorPreview.style.background = safeColor;
    }
  };

  const updateBrushSettings = (forceSync = false) => {
    const safeColor = normalizeColorHex(
      el.multiColorModalHex?.value || el.multiCanvasColorHex?.value || el.multiCanvasColor?.value || state.multi.brushColor,
      state.multi.brushColor,
    );

    state.multi.brushSize = Number(el.multiCanvasSize?.value || 4);
    setSelectedMultiColor(safeColor, { forceSync });

    if (el.btnToggleMultiEraser) {
      const eraserActive = state.multi.tool === "eraser";
      el.btnToggleMultiEraser.classList.toggle("is-active", eraserActive);
      el.btnToggleMultiEraser.setAttribute("aria-pressed", String(eraserActive));
      el.btnToggleMultiEraser.textContent = eraserActive ? "🖌️ Revenir au pinceau" : "🧽 Gomme";
    }

    el.multiCanvas.dataset.tool = state.multi.tool;
  };

  const closeColorModal = () => {
    if (!el.multiColorModal) return;
    el.multiColorModal.hidden = true;
  };

  const openColorModal = () => {
    if (!el.multiColorModal) return;
    updateBrushSettings(true);
    drawMultiColorWheel();
    el.multiColorModal.hidden = false;
  };

  const pickColorFromWheelEvent = (event) => {
    const canvas = el.multiColorWheelCanvas;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const dx = x - (rect.width / 2);
    const dy = y - (rect.height / 2);
    const radius = Math.min(rect.width, rect.height) / 2;
    const distance = Math.sqrt((dx * dx) + (dy * dy));

    if (distance > radius) return;

    const hue = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;
    const value = Math.min(1, Math.max(0, distance / radius));
    const [red, green, blue] = hsvToRgb(hue, 1, value);
    const safeColor = rgbToHex(red, green, blue);
    setSelectedMultiColor(safeColor, { forceSync: true, switchToBrush: true });
    updateBrushSettings(true);
  };

  const finishStroke = () => {
    if (!state.multi.drawing) return;
    flushPendingMultiStrokeBroadcast(true);
    state.multi.drawing = false;
    state.multi.activeStroke = [];
    state.multi.pendingBroadcastPoints = [];
    state.multi.lastPoint = null;
    state.multi.activeTool = state.multi.tool;
  };

  const startStroke = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    syncMultiCanvasSize();
    updateBrushSettings();
    const point = getNormalizedCanvasPoint(event);
    if (!point) return;

    const compactPoint = {
      x: Number(point.x.toFixed(4)),
      y: Number(point.y.toFixed(4)),
    };

    state.multi.drawing = true;
    state.multi.activeTool = state.multi.tool;
    state.multi.lastPoint = compactPoint;
    state.multi.activeStroke = [compactPoint];
    state.multi.pendingBroadcastPoints = [compactPoint];
    state.multi.lastBroadcastAt = 0;
    el.multiCanvas.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  };

  const moveStroke = (event) => {
    if (!state.multi.drawing) return;
    const point = getNormalizedCanvasPoint(event);
    if (!point || !state.multi.lastPoint) return;

    const compactPoint = {
      x: Number(point.x.toFixed(4)),
      y: Number(point.y.toFixed(4)),
    };

    const deltaX = compactPoint.x - state.multi.lastPoint.x;
    const deltaY = compactPoint.y - state.multi.lastPoint.y;
    if ((deltaX * deltaX) + (deltaY * deltaY) < 0.000003) {
      return;
    }

    const segment = [state.multi.lastPoint, compactPoint];
    const activeTool = state.multi.activeTool || state.multi.tool;

    state.multi.activeStroke.push(compactPoint);
    state.multi.pendingBroadcastPoints.push(compactPoint);

    if (activeTool === "eraser") {
      eraseOwnMultiStroke(segment, Math.max(10, state.multi.brushSize + 6), state.presence.sessionId);
      flushPendingMultiStrokeBroadcast();
      state.multi.lastPoint = compactPoint;
      event.preventDefault();
      return;
    }

    drawMultiStrokePath(segment, state.multi.brushColor, state.multi.brushSize);
    state.multi.canvasEvents.push({
      type: "draw-segment",
      points: segment,
      color: state.multi.brushColor,
      size: state.multi.brushSize,
      ownerSessionId: state.presence.sessionId,
      ts: Date.now(),
    });

    if (state.multi.canvasEvents.length > 500) {
      state.multi.canvasEvents.splice(0, state.multi.canvasEvents.length - 500);
    }

    flushPendingMultiStrokeBroadcast();
    state.multi.lastPoint = compactPoint;
    event.preventDefault();
  };

  el.multiCanvas.addEventListener("pointerdown", startStroke);
  el.multiCanvas.addEventListener("pointermove", moveStroke);
  el.multiCanvas.addEventListener("pointerup", finishStroke);
  el.multiCanvas.addEventListener("pointerleave", finishStroke);
  el.multiCanvas.addEventListener("pointercancel", finishStroke);

  el.btnOpenMultiColorModal?.addEventListener("click", (event) => {
    event.preventDefault();
    openColorModal();
  });

  el.btnCloseMultiColorModal?.addEventListener("click", (event) => {
    event.preventDefault();
    closeColorModal();
  });

  el.multiColorModal?.addEventListener("click", (event) => {
    if (event.target === el.multiColorModal) {
      closeColorModal();
    }
  });

  el.multiColorWheelCanvas?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    pickColorFromWheelEvent(event);
    try {
      el.multiColorWheelCanvas.setPointerCapture?.(event.pointerId);
    } catch {
      // ignore pointer capture errors
    }
  });

  el.multiColorWheelCanvas?.addEventListener("pointermove", (event) => {
    if (event.buttons === 0) return;
    event.preventDefault();
    pickColorFromWheelEvent(event);
  });

  el.multiCanvasColor?.addEventListener("input", () => {
    setSelectedMultiColor(el.multiCanvasColor.value, { forceSync: true, switchToBrush: true });
    updateBrushSettings(true);
  });

  el.multiCanvasColorHex?.addEventListener("input", () => {
    setSelectedMultiColor(el.multiCanvasColorHex.value, { forceSync: false });
    updateBrushSettings(false);
  });
  el.multiCanvasColorHex?.addEventListener("change", () => updateBrushSettings(true));
  el.multiCanvasColorHex?.addEventListener("blur", () => updateBrushSettings(true));

  el.multiColorModalHex?.addEventListener("input", () => {
    setSelectedMultiColor(el.multiColorModalHex.value, { forceSync: false, switchToBrush: true });
    updateBrushSettings(false);
  });
  el.multiColorModalHex?.addEventListener("change", () => updateBrushSettings(true));
  el.multiColorModalHex?.addEventListener("blur", () => updateBrushSettings(true));

  el.multiCanvasSize?.addEventListener("input", updateBrushSettings);

  el.btnToggleMultiEraser?.addEventListener("click", (event) => {
    event.preventDefault();
    state.multi.tool = state.multi.tool === "eraser" ? "brush" : "eraser";
    updateBrushSettings(true);
  });

  el.btnClearMultiCanvas?.addEventListener("click", (event) => {
    event.preventDefault();
    clearOwnMultiCanvas(true, "manual-clear");
  });

  window.addEventListener("resize", () => {
    if (!el.multiColorModal?.hidden) {
      drawMultiColorWheel();
    }
    if (el.screenMulti?.classList.contains("active")) {
      syncMultiCanvasSize();
      redrawMultiCanvasHistory();
    }
  });

  updateBrushSettings(true);
  syncMultiCanvasSize();
  redrawMultiCanvasHistory();
}

function setupMultiScreen() {
  const activateMultiAudio = () => {
    ensureMultiToneContext(true);
    ensureSkyToneContext(true);
    MULTI_INSTRUMENTS.forEach((entry) => warmupMultiInstrumentSample(entry.id));
  };

  connectMultiRealtime();
  setupMultiCanvas();
  renderMultiChatMessages();
  updateMultiInstrumentButtons();

  window.addEventListener("online", () => {
    connectMultiRealtime(true);
  });

  el.screenMulti?.addEventListener("pointerdown", activateMultiAudio, { passive: true });

  el.btnStartMulti?.addEventListener("click", (event) => {
    event.preventDefault();
    activateMultiAudio();
    fadeTo(() => {
      setActiveScreen("multi");
      syncMultiCanvasSize();
      redrawMultiCanvasHistory();
      connectMultiRealtime(true);
    });
  });

  el.btnToggleMultiChat?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!state.presence.nickname) {
      openNicknameModal(false);
      return;
    }
    toggleMultiChatDrawer();
  });

  el.btnCloseMultiChat?.addEventListener("click", (event) => {
    event.preventDefault();
    closeMultiChatDrawer();
  });

  el.multiChatBackdrop?.addEventListener("click", closeMultiChatDrawer);

  el.multiChatForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = String(el.multiChatInput?.value || "").trim().slice(0, 240);
    if (!text) return;

    sendMultiRealtimeEvent({ type: "chat-message", text }).catch(() => {
      if (el.multiChatStatus) {
        el.multiChatStatus.textContent = "Message local envoyé, mais la synchro n'a pas répondu.";
      }
    });

    if (el.multiChatInput) {
      el.multiChatInput.value = "";
      el.multiChatInput.focus();
    }
  });

  el.multiMusicPads?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-note]");
    if (!button) return;
    event.preventDefault();
    playMultiMusicNote(button.dataset.note, true);
  });

  document.addEventListener("keydown", (event) => {
    if (!el.screenMulti?.classList.contains("active")) return;
    if (event.repeat || isTypingField(event.target)) return;

    const binding = getSkyKeyboardBinding(event);
    if (!binding) return;

    if (el.skyPianoPanel?.hidden) {
      toggleSkyPiano(true);
    }

    const button = el.skyPianoGrid?.querySelector(`[data-note="${binding.noteId}"]`);
    if (!button) return;

    event.preventDefault();
    triggerSkyPianoNote(button, `clavier ${binding.keyLabel}`);
  });

  document.addEventListener("keyup", (event) => {
    if (!el.screenMulti?.classList.contains("active")) return;
    if (isTypingField(event.target)) return;

    const binding = getSkyKeyboardBinding(event);
    if (!binding) return;

    const button = el.skyPianoGrid?.querySelector(`[data-note="${binding.noteId}"]`);
    if (!button) return;

    releaseSkyPianoNote(button);
  });
}

function setupHome() {
  state.home.krillUnlocked = true;
  state.home.candlesUnlocked = true;
  state.home.lit = 0;
  state.home.locked = false;
  syncKrillShortcutButton();
  syncHomeCandlesVisibility();
  setCandlesMessage("");
  refreshMusicUI();
  el.candlesLayer.innerHTML = "";
  const candleOffsets = [-6, -2, 2, -4, 1, 4, 0];
  const candleTilts = [-6, -3, 2, -1, 4, 6, 0];

  for (let i = 0; i < state.home.total; i += 1) {
    const img = document.createElement("img");
    img.className = "home-candle";
    img.src = path(MEDIA.candles.off);
    img.alt = `Bougie ${i + 1}`;
    img.style.setProperty("--candle-offset", `${candleOffsets[i % candleOffsets.length]}px`);
    img.style.setProperty("--candle-tilt", `${candleTilts[i % candleTilts.length]}deg`);

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
  setupMultiScreen();

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
  closeMultiChatDrawer();
  if (el.onlinePanel) {
    el.onlinePanel.hidden = true;
  }
  document.body.classList.remove("preshake", "chaos-mode");
  hideFeedback();
  setActiveScreen("home");
}

el.btnQuizHome.addEventListener("click", returnToMenu);
el.btnMusicHome.addEventListener("click", returnToMenu);
el.btnMultiHome?.addEventListener("click", returnToMenu);
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
