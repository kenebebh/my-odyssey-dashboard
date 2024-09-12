const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "hello from the users page" });
});

module.exports = router;
