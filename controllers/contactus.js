const path=require('path');

const rootDir=require('../util/path');

exports.getcontactus=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
}
exports.postcontactus=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
}