const express = require("express");
const app = express();

var likesRouter = require("./likes");

app.use("/likes", likesRouter);

module.exports = app;
