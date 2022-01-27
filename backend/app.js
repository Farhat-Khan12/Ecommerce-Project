const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));
app.use(require('./router/productRoutes'));

const PORT = process.env.PORT;


app.listen(PORT,()=> {
    console.log(`server is running at port no ${PORT}`);
})