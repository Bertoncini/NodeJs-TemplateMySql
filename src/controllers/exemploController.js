var sql = require('mysql');
var config = require('../config');

exports.get = (req, res, next) => {
    execSQLQuery("select * from Tabela", res);
};

exports.getParam = (req, res, next) => {
    execSQLQuery(`select * from Tabela where filtro = ${req.params.Param1}`, res);
};

exports.getRoute = (req, res, next) => {
    execSQLQuery(`select * from Tabela2`, res);
};

function execSQLQuery(sqlQry, res) {

    var con = sql.createConnection(config);

    con.connect(function (err) {
        if (err) res.status(400).send(err);

        con.query(sqlQry, function (err, result) {
            if (err) res.status(400).send(err);
            res.send(result);
        });
    });
    
};