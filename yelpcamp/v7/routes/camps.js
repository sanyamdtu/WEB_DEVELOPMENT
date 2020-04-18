var camps_route = require("express").Router(),
    camps_with_info_db = require("../models/camps")
camps_route.get('/camp', (req, res, next) => {
    camps_with_info_db.find({}, (err, camps) => {
        if (err)
            console.log(err)
        else
            res.render("camps", { camps: camps })
    })
})
camps_route.post('/camp', (req, res) => {
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
camps_route.get('/camp/new', (req, res) => {
    res.render("new")
})
camps_route.get('/camp/:id', (req, res) => {
    camps_with_info_db.findById(req.params.id).populate("comments").exec((err, camp) => {
        if (err)
            console.log(err)
        else {
            console.log(camp)
            res.render("show", { camp: camp })
        }
    })
})

function isloggedin(req, res, next) {
    if (req.isAuthenticated())
        next()
    else {
        res.redirect("/login")
    }
}
module.exports = camps_route