const AbstractManager = require("./AbstractManager");

class StoneManager extends AbstractManager {
  constructor() {
    super({ table: "stone" });
  }
}

module.exports = StoneManager;
