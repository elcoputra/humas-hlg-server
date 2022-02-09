const express = require("express");
const app = express();

const contributionRouter = require("./contribution");

app.use("/contribution", contributionRouter); // contribution

module.exports = app;
