"use strict";
var randomstring = require("randomstring");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "subCategories",
      [
        {
          name: randomstring.generate(10),
          description: "alguna descripcion de la categoria",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("subCategory", null, {});
  }
};
