const express = require(`express`);
const fs = require(`fs`);
const app = express();

app.use(express.static(`public`));

app.get(`/api/messages`, (req, res) => {
  res.json({ message: `Hello! How can we help?` });
});

app.listen(4000, () => console.log(`Partner running on port 4000`));
