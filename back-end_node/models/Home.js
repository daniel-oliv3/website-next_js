const Sequelize = require('sequelize');
const db = require('./db');

const Home = db.define('homes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text_one: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text_two: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text_three: {
        type: Sequelize.STRING,
        allowNull: false
    },
    btn_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    btn_link: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//cria a tabela no banco de dados
//Home.sync();

module.exports = Home;