const express = require ("express");
const router= express.Router();
const controller = require("../controller/mainController");

router.get("/", controller.main);
router.get("/about", controller.about);

module.exports = router