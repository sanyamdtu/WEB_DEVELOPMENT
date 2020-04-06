var express = require('express')
var server = express();
var todolistroute = require('./route/todos')
server.set('views', __dirname + '/views')
server.set('view engine', 'ejs')
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/todo', todolistroute);
server.get('/', (req, res) => {
    res.send("type todos")
})
server.listen(6767)