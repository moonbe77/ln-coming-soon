'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "categoryproducts",
        [
          {
            categoryId: Math.floor(Math.random() * 20) + 1,
            productId: Math.floor(Math.random() * 20) + 1,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );
    
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('categoryproducts', null, {});    
  }
};
