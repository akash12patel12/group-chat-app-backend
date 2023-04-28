const User = require("../models/user");
const Message = require("../models/message");
const Group = require("../models/group");
const userGroup = require("../models/user_group");

require("dotenv").config();

exports.createGroup = (req, res) => {
  let uid = req.user.userId;
  Group.create({
    name: req.body.groupName,
    createdByUserId: uid,
  })
    .then((response) => {
      let uuid = uid;
      let gid = response.dataValues.id;
      //   console.log(gid);
      //   console.log(uid);
      userGroup
        .create({
          // id : true,
          UserId: uuid,
          GroupId: gid,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      res.status(200).json({
        msg: "Group Created",
      });
    })
    .catch((err) => {
      res.status(400).json({ err: err });
    });
};

exports.getGroupsOfUser = async (req, res) => {
  const uid = req.user.userId;
  try {
    const user = await User.findByPk(uid, {
      include : [{model : Group}]
    })
    const groups = user.Groups;
    res.json(groups)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.inviteUser = (req,res) =>{
  
}
