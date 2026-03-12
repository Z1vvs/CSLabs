const express = require(`express`);
const fs = require(`fs`);
const cors = require(`cors`);
const helmet = require("helmet");
const app = express();

const config = JSON.parse(fs.readFileSync(`config.json`));
const ver = fs.readFileSync(`version.txt`, `utf8`).trim();
console.log(`[System] Starting ${config.appName} v${ver}...`);

app.use(helmet({ contentSecurityPolicy: false }));

if (config.mode === `mode1`) {
  console.log(`CORS: Enabled (Wide Open)`);
  app.use(cors());
}

if (config.mode === `csp-strict`) {
  console.log(`CSP: Enabled (Strict)`);
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        "default-src": ["'self'"],
      },
    }),
  );
}

if (config.mode === `csp-balanced`) {
  console.log(`CSP Enabled (Balanced)`);
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        "default-src": ["'self'"],
        "img-src": ["*"],
        "style-src": ["*"],
        "script-src": [
          "'self'",
          "http://localhost:4000",
          "http://localhost:8080",
        ],
        "connect-src": ["'self'", "http://localhost:4000/api/messages"],
      },
    }),
  );
}

app.use(express.static(`public`));

app.get(`/api/emails`, (req, res) => {
  const emails = require(`./emails.json`);
  res.json(emails);
});

app.listen(3000, () => console.log(`App running on port 3000`));
