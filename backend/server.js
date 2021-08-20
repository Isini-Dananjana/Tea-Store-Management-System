const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const userAPI = require('./src/api/user.api');
const authAPI = require('./src/api/auth.api');
const expenseAPI = require('./src/api/expense.api');

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false

});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!!");
});

app.use('/user', userAPI());
app.use('/auth', authAPI());
app.use('/expense', expenseAPI());

app.listen(PORT, () => {
    console.log(`server is up and running in port ${PORT}`);
});




