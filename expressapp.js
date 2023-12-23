//const http=require('http');

const express=require('express');
const bodyParser= require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use('/add-prod',(req,res,next) => {
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><input type="text" name="title"><button type="submit">add product</button></form></body></html>');
    
});
app.use('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/')
   // res.send('<h1>Hellow from express</h1>');
});
app.use('/',(req,res,next) => {
    //console.log('in the another meeting')
    res.send('<h1>Hellow from express</h1>');
});
//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);