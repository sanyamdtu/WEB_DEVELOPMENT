var express = require("express")
var router = express.Router()
router.get("/login", (req, res) => {
    res.send("login page");
})
module.exports = router