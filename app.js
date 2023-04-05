const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const sequelize = require('./util/database');
const userRoutes = require('./routes/userRoute')
const User = require("./models/user");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);
sequelize.sync();

app.listen(process.env.PORT || 3000);