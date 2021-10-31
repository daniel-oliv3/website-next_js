const Sequelize = require('sequelize');

const sequelize = new Sequelize('sapup3_banco', 'root', '1234567', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() =>{
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(() =>{
    console.log("Erro: Conexão com o banco de dados não foi realizada!");
});

module.exports = sequelize;