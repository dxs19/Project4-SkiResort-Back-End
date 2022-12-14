'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Resort.hasMany(models.Comment, { foreignKey: 'resortId' })
    }
  }
  Resort.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    review: DataTypes.TEXT,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    height: DataTypes.STRING,
    runs: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Resort',
    tableName: 'resorts'
  });
  return Resort;
};