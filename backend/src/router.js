const express = require("express");

const router = express.Router();

const consumableControllers = require("./controllers/consumableControllers");

router.get("/consumables", consumableControllers.getAllConsumables);
router.post("/consumables", consumableControllers.addConsumable);
router.delete("/consumables/:id", consumableControllers.deleteConsumable);

module.exports = router;
