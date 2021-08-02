const express = require("express");
const cors = require("cors");
const { router } = require("./routers");
const fileUpload = require('express-fileupload')
const _ = require('lodash'); 


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/store", express.static("./store/"))

app.use(fileUpload());

app.use("/", router);



app.listen(5000);

