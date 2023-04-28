const express = require('express');
const userAuth = require('../middlewares/auth')
const router = express.Router();
const chatController = require('../controllers/chatController');
const groupController = require('../controllers/groupController')

router.post('/send', userAuth.authenticate, chatController.send);
// router.post('/send', (req,res)=>{
//     console.log("router");
// })
router.get('/getall',userAuth.authenticate, chatController.getall);

router.get('/getLatestTenMessages', userAuth.authenticate, chatController.getLatestTenMessages);
router.get('/getLatestMessages', userAuth.authenticate, chatController.getLatestMessages);
router.post('/createGroup', userAuth.authenticate, groupController.createGroup );
router.get('/getGroupsOfUser', userAuth.authenticate, groupController.getGroupsOfUser);


module.exports = router;