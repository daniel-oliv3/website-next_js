const express = require('express');
const cors = require('cors');
const app = express();

const Home = require('./models/Home');
const MsgContact = require('./models/MsgContact');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/', async(req, res) => {

    await Home.findOne({
        attributes: ['text_one', 'text_two', 'text_three', 'btn_title', 'btn_link',]
    })
        .then((datahome) => {
            return res.json({
                erro: false,
                datahome
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum valor rncontrado para a págia home!"
            });
        });
    /*return res.json({
        erro: false,
        datahome: {
            text_one: "Temos a solução", 
            text_two: "que a sua empresa precisa", 
            text_three: "Podemos ajudar a sua empresa!", 
            btn_title: "Entrar em Contato ", 
            btn_link: "http://localhost:3000/contato",
        }
    }); */
});

app.post('/add-home', async (req, res) => {

    const dataHome = await Home.findOne();

    if(dataHome){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Não cadastrado com sucesso, a página home possui um registro!"
        });
    }

    await Home.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados para a página home cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Dados para a página home não cadastrado com sucesso!"
        });
    })

    
});

app.post("/add-msg-contact", async (req, res) => {
    console.log(req.body);

    await MsgContact.create(req.body)
    .then((msgContact) => {
        return res.json({
            erro: false,
            id: msgContact.id,
            mensagem: "Mensagem de contato enviando com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Mensagem de contato não envianda com sucesso!"
        });
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});