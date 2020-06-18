"use strict";
var randomstring = require("randomstring");
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
               "products",
               [
                 {
                   name: randomstring.generate(15),
                   description:
                     "limpsum asdojfhasd sdaidahs nsadoi asdn ioadsioasd dasoiais asoidha,sn daujshd djiusd sd dsd sdloadsb d,snadokljsad a,sndkajsdb",
                   price: 45.26,
                   priceDolar: 1.5,
                   tasaIVA: "21",
                   promoActive: null,
                   stock: null,
                   codeArticle: null,
                   codePromo: null,
                   descriptionGroup: null,
                   imageUrl: null,
                   descriptionSubGroup: null,
                   visible: 1,
                   sku: null,
                   upc: null,
                   serialNumber: null,
                   createdAt: new Date(),
                   updatedAt: new Date(),
                   categoryId: Math.floor(Math.random() * 10) + 1,
                   SubCategoryId: Math.floor(Math.random() * 10) + 1
                 }
               ],
               {}
             );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("product", null, {});
  }
};
