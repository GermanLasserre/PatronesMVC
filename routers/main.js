const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

router.get("/", controller.main)
router.get("/about", controller.about)

module.exports = router;