const http = require("node:http");
const path = require("node:path");
const fs = require('node:fs/promises');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {'Content-Type': "text/html"});
  const indexFile = await fs.readFile(path.join(__dirname, 'public', 'index.html'));
  res.end(indexFile);
});

server.on("request", (req, res) => {
  console.log(req.url);
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});