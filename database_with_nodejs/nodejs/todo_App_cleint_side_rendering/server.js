var express = require('express')
var server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.get('/', (req, res) => {
    res.render(' ../views/index.html')
})
server.listen(6767)