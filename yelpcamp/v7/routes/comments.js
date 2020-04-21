var comment_route = require("express").Router({ mergeParams: true }),
    camps_with_info_db = require("../models/camps")
comments_db = require("../models/comment")

comment_route.get("/new", isloggedin, (req, res) => {
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (err)
            console.log(err)
        else {
            res.render("comment_new.ejs", { camp: camp })
        }
    })
})
comment_route.post("/", isloggedin, (req, res) => {
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

function isloggedin(req, res, next) {
    if (req.isAuthenticated())
        next()
    else {
        res.redirect("/login")
    }
}
module.exports = comment_route