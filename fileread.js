const http=require('http');
const route=require('./routes1')
console.log(route.text)
const server = http.createServer(route.handler);
server.listen(4000);