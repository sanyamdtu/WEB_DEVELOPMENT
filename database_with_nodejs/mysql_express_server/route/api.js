var express = require('express')
var route = express.Router()
var sql_functions = require('../db')
route.get('/add', (req, res) => {
    var table = sql_functions.getdata()
        .then((table) => {
            res.render('index', { db: table })
        })
        .catch((err) => {
            res.render(err)
        })
})
route.post('/add', (req, res) => {
    sql_functions.addata(req.body.number, req.body.name, req.body.age)
    res.redirect('/')
})