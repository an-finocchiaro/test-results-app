const { sequelize, DataTypes } = require("sequelize");
const Patient = require("./Patient");
const Result = ''

module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define("Result", {
    date: DataTypes.DATEONLY,
    type: DataTypes.STRING,
    limits: DataTypes.STRING,
    test_result: DataTypes.STRING,
    token: DataTypes.STRING,
  });

  return Result;
};

/*
  Result.associate = (models) => {
    Result.belongsTo(models.Patient)
  };*/
