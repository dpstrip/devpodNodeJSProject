var http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
    fs.writeFileSync("temp", "here\n", { flag: 'a' }, err => { });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1></h1>Hello World</h1>');
}).listen(3090);
