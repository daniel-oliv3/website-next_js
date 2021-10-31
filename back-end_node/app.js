const express = require('express');
const cors = require('cors');
const app = express();



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/', async(req, res) => {
    return res.json({
        erro: false,
        datahome: {
            text_one: "Temos a solução", 
            text_two: "que a sua empresa precisa", 
            text_three: "Podemos ajudar a sua empresa!", 
            btn_title: "Entrar em Contato ", 
            btn_link: "http://localhost:3000/contato",
        }
    })
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});