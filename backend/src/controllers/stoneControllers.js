const models = require("../models");

const getAllStones = (req, res) => {
  models.stone
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllStones,
};
