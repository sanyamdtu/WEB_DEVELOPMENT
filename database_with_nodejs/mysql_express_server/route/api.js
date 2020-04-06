var express = require('express')
var route = express.Router()
var sql_functions = require('../db')
route.get('/persons/', (req, res) => {
    sql_functions.getdata()
        .then((table) => {
            res.send(table)
        })
        .catch((err) => {
            res.send(err)
        })
})
route.post('/persons/', (req, res) => {
    sql_functions.addata(req.body.number, req.body.name, req.body.age)
        .then(() => res.redirect('/api/persons/'))
        .catch((err) => res.send(err))
})
module.exports = route