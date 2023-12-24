const express=require('express');
const bodyParser=require('body-parser');
const userroute=require('./chatapprouter/user');
const messageroute=require('./chatapprouter/chatapp');

const chatapp=express();

chatapp.use(bodyParser.urlencoded({extended:false}));
chatapp.use(userroute);
chatapp.use(messageroute);


chatapp.listen(3000);