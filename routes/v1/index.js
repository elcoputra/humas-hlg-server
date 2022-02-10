const express = require("express");
const app = express();

const contributionRouter = require("./contribution");
const authRouter = require("./contribution");
const testOnlyRouter = require("./test_only");

app.use("/contribution", contributionRouter); // contribution
app.use("/auth", authRouter);
app.use("/test_only", testOnlyRouter);

module.exports = app;
