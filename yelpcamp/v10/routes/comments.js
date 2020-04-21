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
            var comm = {
                title: req.body.title,
                author: {
                    id: req.user._id,
                    username: req.user.username
                }
            }
            comments_db.create(comm, (err, comment) => {
                if (err)
                    console.log(err)
                else {
                    camp.comments.push(comment)
                    camp.save();
                    res.redirect("/camp/" + req.params.id)
                }
            })
        }
    })

})
comment_route.get("/:comment_id/edit", [isloggedin, check_comment_ownership], (req, res) => {
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (err)
            console.log(err)
        else {
            comments_db.findById(req.params.comment_id, (err, comm) => {
                if (err)
                    console.log(err)
                else
                    res.render("comment_edit", { comm: comm, camp: camp })
            })
        }
    })
})
comment_route.put("/:comment_id", (req, res) => {
    comments_db.findByIdAndUpdate(req.params.comment_id, {
        author: {
            id: req.user._id,
            username: req.user.username
        },
        title: req.body.updated_title
    }, (err, comm) => {
        if (err)
            res.redirect("back")
        else
            res.redirect("/camp/" + req.params.id)
    })
})
comment_route.delete("/:comment_id", [isloggedin, check_comment_ownership], (req, res) => {
    comments_db.findByIdAndDelete(req.params.comment_id, (err) => {
        if (err)
            console.log(err)
        else
            res.redirect("/camp/" + req.params.id)
    })
})

function isloggedin(req, res, next) {
    if (req.isAuthenticated())
        next()
    else {
        res.redirect("/login")
    }
}

function check_comment_ownership(req, res, next) {
    comments_db.findById(req.params.comment_id, (err, comm) => {
        if (req.user._id.equals(comm.author.id))
            next();
        else
            res.redirect("back")
    })
}
module.exports = comment_route