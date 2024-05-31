'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Filmcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Filmcategory.belongsTo(models.Film, {foreignKey: "film_id"});
      Filmcategory.belongsTo(models.Category, {foreignKey: "category_id"});
    }
  }
  Filmcategory.init({
    film_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Filmcategory',
  });
  return Filmcategory;
};