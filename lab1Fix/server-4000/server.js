const express = require(`express`);
const fs = require(`fs`);
const cors = require(`cors`);
const app = express();

const config = JSON.parse(fs.readFileSync(`config.json`));
const ver = fs.readFileSync(`version.txt`, `utf8`).trim();
console.log(`[System] Starting ${config.appName} v${ver}...`);

if (config.mode === `mode1`) {
  console.log(`CORS: Enabled (Wide Open)`);
  app.use(cors());
}

app.use(express.static(`public`));

app.get(`/api/messages`, (req, res) => {
  res.json({ message: `Hello! How can we help?` });
});

app.listen(4000, () => console.log(`Partner running on port 4000`));
