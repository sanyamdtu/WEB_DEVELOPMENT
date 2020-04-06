var express = require('express')
var server = express()
server.get("/jojo", (req, res, next) => {
    res.send(`
    <html>
    <body>
    <h1>
    DIE POLNAREFF
    </h1>
    </body>
    </html>
    `)
    next()
})
var m1 = (req, res, next) => {
    console.log("your hamon training is useless")
    next()
}
var m2 = (req, res, next) => {
    console.log("oh thats right joseph")
    next()
}
var m3 = (req, res, next) => {
    console.log("i have had enough")
    next()
}
var m4 = (req, res, next) => {
    console.log("dio brando")
    next()
}
server.use('/', m1)
server.use('/', m2)
server.use('/naruto', m3)
server.use('/jojo', m4)
server.listen(8989)