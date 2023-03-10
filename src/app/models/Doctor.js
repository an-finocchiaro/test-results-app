const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define("Doctor", {
    license: DataTypes.STRING,
    license_state: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING,
  });
  return Doctor;
};

/*Doctor.associate = (models) => {
  Doctor.belongsTo(models.Patient)
};*/
