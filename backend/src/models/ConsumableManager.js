const AbstractManager = require("./AbstractManager");

class ConsumableManager extends AbstractManager {
  constructor() {
    super({ table: "consumable" });
  }
  insert(item) {
    return this.database.query(
      `insert into ${this.table} (name, reference, description, price) values (?, ?, ?, ?)`,
      [item.name, item.reference, item.description, item.price]
    );
  }
}

module.exports = ConsumableManager;
