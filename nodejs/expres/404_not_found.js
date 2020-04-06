var express = require("express")
var serv = express()
serv.get("/jojo", (req, res, next) => {
    res.send("<h1>your hamon training is useless</h1>")
})
serv.get("/naruto", (req, res, next) => {
    res.send("<h2>beleive it</h2>")
})
serv.use((req, res, next) => {
    res.send("<h1>404 not found")
})
serv.listen(7676)