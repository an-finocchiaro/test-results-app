'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tests', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      patient_registration_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      patient_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      patient_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      patient_birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      patient_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      patient_city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      patient_state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      doctor_license: {
        type: Sequelize.STRING,
        allowNull: false
      },
      doctor_license_state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      doctor_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      doctor_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      test_token: {
        type: Sequelize.STRING,
        allowNull: false,
        key: true
      },
      test_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      test_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      test_limits: {
        type: Sequelize.STRING,
        allowNull: false
      },
      test_result: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tests');
  }
};
