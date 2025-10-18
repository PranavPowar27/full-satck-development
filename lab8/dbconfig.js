const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: 'test1',
    username: 'root',
    password: '8421869506',
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize;