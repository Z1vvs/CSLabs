const express = require(`express`);
const path = require(`path`);
const app = express();

const args = process.argv;
const isBreach =
  args.includes(`--mode`) && args[args.indexOf(`--mode`) + 1] === `breach1`;

app.get(`/weather.js`, (req, res) => {
  if (isBreach) {
    res.sendFile(path.join(__dirname, `public`, `weather-breach.js`));
  } else {
    res.sendFile(path.join(__dirname, `public`, `weather-normal.js`));
  }
});

app.listen(5000, () => console.log(`Utility running on port 5000`));
