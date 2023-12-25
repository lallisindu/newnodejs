//const http=require('http');
const path=require('path')
const express=require('express');
const bodyParser= require('body-parser');
const app=express();
const adminRouter=require("./router/admin");
const shopRouter=require("./router/shop");
const contactroutes=require('./router/contactus')
const errController=require('./controllers/error')
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin', adminRouter);
app.use(shopRouter);
app.use('/contactus',contactroutes)
app.use(errController.get404)

//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);