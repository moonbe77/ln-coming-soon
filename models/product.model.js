const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Sequelize.Model {}
  Product.init(
    {
      // attributes
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false       
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      priceDolar: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      tasaIVA: {
        type: DataTypes.STRING,
        allowNull: true
      },
      promoActive: {
        type: DataTypes.STRING,
        allowNull: true
      },
      stock: {
        type: DataTypes.STRING,
        allowNull: true
      },
      codeArticle: {
        type: DataTypes.STRING,
        allowNull: true
      },
      codePromo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      descriptionGroup: {
        type: DataTypes.STRING,
        allowNull: true
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
      },
      descriptionSubGroup: {
        type: DataTypes.STRING,
        allowNull: true
      },
      visible: {
        type: DataTypes.STRING,
        defaultValue: true
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: true
      },
      upc: {
        type: DataTypes.STRING,
        allowNull: true
      },
      serialNumber: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    { sequelize }
  );

  // Product.associations = (models) => {
  //   Product.belongsTo(models.subCategory, {
  //     foreignKey: { allowNull: true }
  //   });
  // };

  return Product;
};
