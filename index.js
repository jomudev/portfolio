const http = require("node:http");
const path = require("node:path");
const fs = require('node:fs');

const hostname = "127.0.0.1";
const port = 3000;
const encoding = 'UTF-8';

const server = http.createServer(async (req, res) => {
  let filePath = req.url;
  if (filePath == "/") {
    filePath = "/index.html";
  }
 
  filePath = path.join(__dirname, "public", filePath);
  let fileExtension = path.extname(filePath);

  let contentType = {
    ".css" : 'text/css',
    ".js" : 'text/javascript',
    ".html": 'text/html',
    ".jpeg": 'image/jpeg',
    ".jpg": 'image/jpeg',
    ".png": 'image/png',
    ".webp": 'image/webp',
  };

  if (fileExtension === ".jpeg" || fileExtension === ".jpg" || fileExtension === ".png" || fileExtension == ".webp") {
    const stat = fs.statSync(filePath);
    res.writeHead(200, { 
      'Content-Type': 'octet-stream',
      'Content-size': stat.size,
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
    return;
  }
  
  contentType = contentType[fileExtension];
  
  fs.readFile(filePath, { encoding }, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write("reading file error");
      res.end();
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.write(content);
    res.end();
  });
});


server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});