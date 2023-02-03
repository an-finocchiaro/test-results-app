const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define("Patient", {
    registration_number: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    token: DataTypes.STRING,
  });
  return Patient;
};

/*
Patient.associate = (models) => {
    Patient.hasOne(models.Doctor,
      { foreignKey: 'patient_id', as: 'doctors' });
  };

  Patient.associate = (models) => {
    Patient.hasMany(models.Result,
      { foreignKey: 'patient_id', as: 'results' });
  };*/
