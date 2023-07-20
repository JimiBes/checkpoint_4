const express = require("express");

const router = express.Router();

const stoneControllers = require("./controllers/stoneControllers");

router.get("/stones", stoneControllers.getAllStones);
router.post("/stones", stoneControllers.addStone);
router.delete("/stones/:id", stoneControllers.deleteStone);

module.exports = router;
