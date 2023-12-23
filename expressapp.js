const http=require('http');

const express=require('express');
const app=express();
app.use((req,res,next) => {
    console.log('in the meeting')
    next();
});
app.use((req,res,next) => {
    console.log('in the another meeting')
    res.send('<h1>Hellow from express</h1>');
});
//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);