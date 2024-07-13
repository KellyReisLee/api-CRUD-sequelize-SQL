const { Router } = require('express')
const router = Router();

router.get("/", function (req, res) {
  console.log("Welcome to main page");
})

module.exports = router;