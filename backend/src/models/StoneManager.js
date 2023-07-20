const AbstractManager = require("./AbstractManager");

class StoneManager extends AbstractManager {
  constructor() {
    super({ table: "stone" });
  }
  insert(item) {
    return this.database.query(
      `insert into ${this.table} (name, description, color, origin, hardness, image_url) values (?, ?, ?, ?, ?, ?)`, 
      [item.name, item.description, item.color, item.origin, item.hardness, item.image_url]
    );
  }
  
}

module.exports = StoneManager;
