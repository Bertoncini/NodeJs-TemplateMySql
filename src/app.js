const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

//configurando o body parser para pegar POSTS (URLEncoded e JSON)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());   

//Habilitando cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Rotas
const index = require('./routes/index');
const exemploRoute = require('./routes/exemploRoute');
app.use('/', index);
app.use('/exemplo', exemploRoute);

module.exports = app;