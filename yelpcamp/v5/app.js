var express = require("express")
var server = express()
var mongoose = require('mongoose')
var camps_with_info_db = require("./models/camps")
var comments_db = require("./models/comment")
var seedDb = require("./seed")
seedDb()
server.set('views', __dirname + '/views')
server.set('view engine', "ejs")
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(__dirname + "/public"))
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
    camps_with_info_db.findById(req.params.id).populate("comments").exec((err, camp) => {
        if (err)
            console.log(err)
        else {
            console.log(camp)
            res.render("show", { camp: camp })
        }
    })
})
server.get("/camp/:id/comments/new", (req, res) => {
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (err)
            console.log(err)
        else {
            res.render("comment_new.ejs", { camp: camp })
        }
    })
})
server.post("/camp/:id/comments", (req, res) => {
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (err)
            console.log(err)
        else {
            comments_db.create(req.body.comm, (err, comment) => {
                camp.comments.push(comment)
                camp.save();
                res.redirect("/camp/" + req.params.id)
            })
        }
    })

})
server.listen(3434, () => {
    console.log("server has started")
})