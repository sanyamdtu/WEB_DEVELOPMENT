var camps_route = require("express").Router(),
    camps_with_info_db = require("../models/camps")
camps_route.get('/', (req, res, next) => {
    camps_with_info_db.find({}, (err, camps) => {
        if (err)
            console.log(err)
        else
            res.render("camps", { camps: camps })
    })
})
camps_route.post('/', (req, res) => {
    camps_with_info_db.create({
        name: req.body.name,
        image: req.body.url,
        desc: req.body.desc,
        author: {
            id: req.user._id,
            username: req.user.username
        }
    }, (err, camp) => {
        if (err)
            console.log(err)
        else
            res.redirect('/camp')
    })
})
camps_route.get('/new', isloggedin, (req, res) => {
    res.render("new")
})
camps_route.get('/:id', (req, res) => {
    camps_with_info_db.findById(req.params.id).populate("comments").exec((err, camp) => {
        if (err)
            console.log(err)
        else {
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