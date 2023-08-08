const AbstractManager = require("./AbstractManager");

class ConsumableManager extends AbstractManager {
  constructor() {
    super({ table: "consumable" });
  }
  insert(item) {
    return this.database.query(
      `insert into ${this.table} (name, description, color, origin, hardness, composition, image_url) values (?, ?, ?, ?, ?, ?, ?)`, 
      [item.name, item.description, item.color, item.origin, item.hardness, item.composition, item.image_url]
    );
  }
  
}

module.exports = ConsumableManager;
