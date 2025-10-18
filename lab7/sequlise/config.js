const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('test1', 'root', '8421869506', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize;