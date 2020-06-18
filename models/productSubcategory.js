const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class productSubcategory extends Sequelize.Model {}
  productSubcategory.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      subCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { sequelize }
  );

  return productSubcategory;
};
