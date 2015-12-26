const fs = require("fs");
const http = require('http');
const hostname = '0.0.0.0';
const port = 9003;
const photos_dir = '/var/www/homepage/photos/';


http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  fs.readdir(photos_dir, function(err, files) {
    if (err) {
      console.log(err);
      return;
    }
    files.splice(files.indexOf('index.html'), 1);
    files = files.sort().reverse();
    res.end(JSON.stringify(files));
  });
}).listen(port, hostname, function() {
  console.log('Server running');
});

