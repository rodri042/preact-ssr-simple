const express = require("express");
const { h } = require("preact");
const render = require("preact-render-to-string");
const { App } = require("./src/App");
const path = require("path");

const app = express();

const HTMLShell = (html) => `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>SSR Preact App</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script src="./app.js"></script>
        </body>
    </html>`;

app.use(express.static(path.join(__dirname, "dist")));

app.get("**", (req, res) => {
  const html = render(<App />);
  res.send(HTMLShell(html));
});

app.listen(4000);
