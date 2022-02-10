const express = require("express");
const app = express();

const instagramRouter = require("./instagram");

app.use("/instagram", instagramRouter);



module.exports = app;
