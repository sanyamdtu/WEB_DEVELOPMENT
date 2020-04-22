var camps_with_info_db = require("../models/camps"),
    comments_db = require("../models/comment")
var midd = {}
midd.check_camp_ownership = function(req, res, next) {
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (req.user._id.equals(camp.author.id))
            next();
        else
            res.redirect("back")
    })
}

midd.isloggedin = function(req, res, next) {
    if (req.isAuthenticated())
        next()
    else
        res.redirect("/login")
}

midd.check_comment_ownership = function(req, res, next) {
    comments_db.findById(req.params.comment_id, (err, comm) => {
        if (req.user._id.equals(comm.author.id))
            next();
        else
            res.redirect("back")
    })
}
module.exports = midd