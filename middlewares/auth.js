
const jwt = require('jsonwebtoken');

exports.authenticate=(req,res,next)=>{
    // console.log("reached middleware");
    const token = req.headers.authorization;
    if(!token) {
        res.status(401).json({"message" : "User Must Login First" })
    }
    const user = jwt.verify(token, process.env.BCRYPT_SECRET);
    
    req.user = user;
    next();
}

