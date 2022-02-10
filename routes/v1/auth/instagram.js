var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/generate_long_token", function (req, res, next) {
  const sendData = {
    method: "post",
    body: req.body,
    query: req.query,
  };

  res.send(sendData);
});

router.get("/", function (req, res, next) {
  const sendData = {
    method: "get",
    body: req.body,
    query: req.query,
  };

  res.send(sendData);
});

module.exports = router;
