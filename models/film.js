'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Film.hasMany(models.Filmcategory, {foreignKey: "film_id"});

    }
  }
  Film.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
    language_id: DataTypes.INTEGER,
    rental_duration: DataTypes.INTEGER,
    rental_rate: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    spesial_feature: DataTypes.STRING,
    fulltext: DataTypes.STRING,
    image_url: DataTypes.STRING,    
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};