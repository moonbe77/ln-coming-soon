const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Sequelize.Model {}
  SubCategory.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,        
      }
    },
    { sequelize }
  );

// SubCategory.associations = models =>{
//   SubCategory.belongsTo(models.Category)
// }
  return SubCategory;
};
