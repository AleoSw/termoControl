const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("panel/settings");
});

router.get("/user/add", (req, res) => {
    res.render("panel/user");
})

router.get("/rol/add", (req, res) => {
    res.render("panel/rol");
});

router.get("/color/add", (req, res) => {
    res.render("panel/color");
});

module.exports = router;
