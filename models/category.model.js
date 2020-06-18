const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Sequelize.Model {}
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      parent: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    { sequelize }
  );

Category.associations = models =>{
  Category.hasMany(models.SubCategory)
}
  return Category;
};
