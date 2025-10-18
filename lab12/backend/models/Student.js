const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
  name: DataTypes.STRING,
  class: DataTypes.STRING,
  rollNo: DataTypes.STRING,
  subject1: DataTypes.STRING,
  mark1: DataTypes.INTEGER,
  subject2: DataTypes.STRING,
  mark2: DataTypes.INTEGER,
  subject3: DataTypes.STRING,
  mark3: DataTypes.INTEGER,
  subject4: DataTypes.STRING,
  mark4: DataTypes.INTEGER,
});

module.exports = Student;