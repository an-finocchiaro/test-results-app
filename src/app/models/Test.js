const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define("Test", {
    patient_registration_number: DataTypes.STRING,
    patient_name: DataTypes.STRING,
    patient_email: DataTypes.STRING,
    patient_birthday: DataTypes.DATEONLY,
    patient_address: DataTypes.STRING,
    patient_city: DataTypes.STRING,
    patient_state: DataTypes.STRING,
    doctor_license: DataTypes.STRING,
    doctor_license_state: DataTypes.STRING,
    doctor_name: DataTypes.STRING,
    doctor_email: DataTypes.STRING,
    test_token: DataTypes.STRING,
    test_date: DataTypes.DATEONLY,
    test_type: DataTypes.STRING,
    test_limits: DataTypes.STRING,
    test_result: DataTypes.STRING,
  });
  return Test;
  