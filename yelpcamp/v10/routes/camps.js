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
camps_route.get('/:id', function(req, res) {
    camps_with_info_db.findById(req.params.id).populate("comments").exec((err, camp) => {
        if (err)
            console.log(err)
        else {
            res.render("show", { camp: camp })
        }
    })
})

camps_route.put("/:id", function(req, res) {
    var new_camp_updated = {
        name: req.body.name,
        image: req.body.url,
        desc: req.body.desc,
        author: {
            id: req.user._id,
            username: req.user.username
        }
    }
    camps_with_info_db.findByIdAndUpdate(req.params.id, new_camp_updated).populate("comments").exec((err, camp) => {
        if (err)
            console.log(err)
        else
            res.redirect("/camp/" + camp._id)
    })
})
camps_route.get("/:id/edit",[isloggedin,check_camp_ownership],(req, res) => {
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (err)
            console.log(err)
        else
            res.render("camp_edit", { camp: camp })
    })
})
camps_route.delete("/:id",[isloggedin,check_camp_ownership],(req, res) => {
    camps_with_info_db.findByIdAndRemove(req.params.id, (err, camp) => {
        res.redirect("/camp")
    })
})

function check_camp_ownership(req,res,next) {
    camps_with_info_db.findById(req.params.id,(err,camp)=>{
    if(req.user._id.equals(camp.author.id))
        next();
    else
     res.redirect("back")
    })
}

function isloggedin(req, res, next) {
    if (req.isAuthenticated())
        next()
    else
        res.redirect("/login")
}

module.exports = camps_route