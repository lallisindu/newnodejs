const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        return res.end();
      }

      console.log('Data from file:', data);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>');
      res.write('<body>');

      // Display the file content inside a label or paragraph tag
      res.write(`<label>${data || ''}</label>`);

      // Your form to submit messages
      res.write('<form action="/message" method="POST">');
      res.write('<input type="text" name="message" />');
      res.write('<button type="submit">Send</button>');
      res.write('</form>');

      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      // Write the received message to the file
      fs.writeFile('message.txt', message, (err) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.write('Internal Server Error');
          return res.end();
        }

        console.log('Message written to file');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Page Not Found</title></head>');
    res.write('<body><h1>404 - Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(2000, () => {
  console.log('Server is running on port 2000');
});
