var express = require('express')
var route = express.Router()
var sql_functions = require('../db')
route.get('/display', (req, res) => {
    sql_functions.getdata()
        .then((table) => {
            res.render('index', { db: table })
        })
        .catch((err) => {
            res.render(err)
        })
})

route.get('/add', (req, res) => {
    res.render('add')
})
route.post('/add', (req, res) => {
    sql_functions.addata(req.body.number, req.body.name, req.body.age)
    res.redirect('/display')
})
module.exports = route