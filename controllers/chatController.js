const User = require("../models/user");
const Message = require("../models/message")
require("dotenv").config();

exports.send = async (req,res) =>{
    // console.log("controller working");
    // console.log(req.body);
    const message = req.body.message
   const sender  = await  User.findByPk(req.user.userId)
   console.log(sender.id);
   Message.create({
       senderid : sender.id,
       sender : sender.name,
       message : message
   }).then(data=>{
      res.status(200).json({success : true})
   }).catch(err=>{
    res.status(401).json({success : false})
   })

}
