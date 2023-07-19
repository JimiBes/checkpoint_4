const express = require("express");

const router = express.Router();

const stoneControllers = require("./controllers/stoneControllers");

router.get("/", stoneControllers.getAllStones);

module.exports = router;
