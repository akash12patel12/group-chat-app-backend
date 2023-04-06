const express = require('express');
const userAuth = require('../middlewares/auth')
const router = express.Router();
const chatController = require('../controllers/chatController');


router.post('/send', userAuth.authenticate, chatController.send);
// router.post('/send', (req,res)=>{
//     console.log("router");
// })
// router.get('/getall',userAuth.authenticate, chatController.getall);


module.exports = router;