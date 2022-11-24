const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Send a Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Node.js Server</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);