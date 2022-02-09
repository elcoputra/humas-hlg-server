const express = require("express");
const app = express();

const authRouter = require("./auth");

app.use("/auth", authRouter);

module.exports = app;
