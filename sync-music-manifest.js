const fs = require('fs');
const path = require('path');

const root = __dirname;
const musicDir = path.join(root, 'musique');
const manifestPath = path.join(root, 'music-manifest.json');
const allowedExtensions = new Set(['.mp3', '.m4a', '.wav', '.ogg']);

fs.mkdirSync(musicDir, { recursive: true });

const tracks = fs.readdirSync(musicDir, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((fileName) => allowedExtensions.has(path.extname(fileName).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, 'fr'))
  .map((fileName) => `musique/${fileName}`);

fs.writeFileSync(manifestPath, JSON.stringify(tracks, null, 2) + '\n', 'utf8');
console.log(`Manifest musique mis à jour (${tracks.length} piste(s)).`);
