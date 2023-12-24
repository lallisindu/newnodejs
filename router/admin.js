const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next) => {
    res.send('<html><body><form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="title"><button type="submit">add product</button></form></body></html>');
    
});
router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/')
   // res.send('<h1>Hellow from express</h1>');
});

module.exports=router;