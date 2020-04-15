var express = require("express")
var server = express()
var mongoose = require('mongoose')
var camps_with_info_db = require("./models/camps")
var seedDb = require("./seed")
seedDb()
server.set('views', __dirname + '/views')
server.set('view engine', "ejs")
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.get('/', (req, res, next) => {
    res.render("landing")
})
server.get('/camp', (req, res, next) => {
    camps_with_info_db.find({}, (err, camps) => {
        if (err)
            console.log(err)
        else
            res.render("camps", { camps: camps })
    })
})
server.post('/camp', (req, res) => {
    camps_with_info_db.create({
        name: req.body.name,
        image: req.body.url,
        desc: req.body.desc
    }, (err, camp) => {
        if (err)
            console.log(err)
        else {
            console.log("inserted")
            console.log(camp)
        }
        res.redirect('/camp')
    })
})
server.get('/camp/new', (req, res) => {
    res.render("new")
})
server.get('/camp/:id', (req, res) => {
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (err)
            console.log(err)
        else {
            res.render("show", { camp: camp })
        }
    })
})
server.listen(3434, () => {
    console.log("server has started")
})