const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Sequelize.Model {}
  CategoryProduct.init(
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { sequelize }
  );

  return CategoryProduct;
};
