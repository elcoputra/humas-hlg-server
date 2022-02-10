var express = require("express");
var router = express.Router();

const instagramHandler = require("../../../handler/auth/instagram");

/* GET users listing. */
router.post("/generate_short_token", async (req, res) => {
  console.log("test");
  const resIg = await instagramHandler.generateShortToken(req);
  res.send(resIg);
});

router.post("/generate_long_token", async (req, res) => {
  const sendData = {
    method: "post",
    body: req.body,
    query: req.query,
  };

  res.send(sendData);
});

router.get("/", async (req, res) => {
  const sendData = {
    method: "get",
    body: req.body,
    query: req.query,
  };

  res.send(sendData);
});

module.exports = router;
