const express=require('express');

const router=express.Router();

const contactusController=require('../controllers/contactus')

router.get('/',contactusController.getcontactus)

router.post('/success',contactusController.postcontactus)

module.exports=router;