const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const sequelize = require('./util/database');
const userRoutes = require('./routes/userRoute');
const chatRoutes = require('./routes/chat')
const User = require("./models/user");
const Group = require("./models/group")
const userGroup = require("./models/user_group");
const Invitation = require("./models/invitation")


const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(userRoutes);
app.use(chatRoutes);


User.belongsToMany(Group, {through : 'User_group'});
Group.belongsToMany(User, {through : 'User_group'});
Invitation.belongsTo(User);
Invitation.belongsTo(Group);


// sequelize.sync({force:true});
sequelize.sync();

app.listen(process.env.PORT || 3000);