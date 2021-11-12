const Sequelize = require('sequelize');
const db = require('./db');

const MsgContact = db.define('msgs_contacts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//cria a tabela no banco de dados
//MsgContact.sync();

//Verificar se há alguma diferença na tabela, realizar a alteração
//MsgContact.sync({ alter: true });

//Primeiro apaga a tabela, em seguida cria uma nova tabela
//MsgContact.sync({ force: true });


module.exports = MsgContact;