var express = require('express')

var server = express()
var sql_functions = require('./db')
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.set('views', __dirname + '/views')
server.set('view engine', 'ejs')
server.get('/', (req, res) => {
    var table = sql_functions.getdata()
        .then((table) => {
            res.render('index', { db: table })
        })
        .catch((err) => {
            res.render(err)
        })
})

server.get('/add', (req, res) => {
    res.render('add')
})
server.post('/add', (req, res) => {
    sql_functions.addata(req.body.number, req.body.name, req.body.age)
    res.redirect('/')
})
server.listen(5656)