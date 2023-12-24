//const http=require('http');

const express=require('express');
const bodyParser= require('body-parser');
const app=express();
const adminRouter=require("./router/admin");
const shopRouter=require("./router/shop");
app.use(bodyParser.urlencoded());

app.use('/admin', adminRouter);
app.use('/shop',shopRouter);
app.use((req, res,next)=>{
    res.status(404).send("<h1>Page not found</h1>");
})

//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);