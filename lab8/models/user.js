const dbconfig = require("../dbconfig");
const { DataTypes } = require('sequelize');

const Users = dbconfig.define('Users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rollno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = Users;