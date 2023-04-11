const User = require("../models/user");
const Message = require("../models/message")
const { Op } = require("sequelize");
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


exports.getall = async (req,res) =>{
   Message.findAll().then(msgs=>{
    res.status(200).json(msgs)
   }).catch(err=>{
    res.status(400).json({error : err})
   });
}

exports.getLatestTenMessages = async (req,res) => {
   console.log('Called Controller');
   let LatestMessageId;
   await Message.findOne({
      order: [ [ 'id', 'DESC' ]],
      }).then(data=>{
         LatestMessageId = data.id;
      });
   await Message.findAll({
      where : {
         id : {
            [Op.gt] : LatestMessageId - 10 
         }
      }
   }).then(LatestTenMsgs=>{
      res.json(LatestTenMsgs)
   })

}


exports.getLatestMessages = async (req, res) =>{
   const lastMsgId = parseInt(req.query.lastMsgId);
   await Message.findAll({
      where : {
         id : {
            [Op.gt] :  lastMsgId
         }
      }
   }).then(LatestMsgs=>{
      res.json(LatestMsgs);
   })
}
