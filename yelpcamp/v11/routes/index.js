var register_login_routes = require("express").Router(),
    passport = require("passport"),
    user = require("../models/user")

register_login_routes.get('/', (req, res, next) => {
    res.render("landing")
})

register_login_routes.get("/register", (req, res) => {
    res.render("register.ejs")
})

register_login_routes.post("/register", (req, res) => {

    user.register(new user({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            console.log(err)
            return res.redirect("/register")
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/")
            })
        }
    })

})

///========================================================
//
//login routes
//
//============================================================
register_login_routes.get("/login", (req, res) => {
    res.render("login")
})
register_login_routes.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}))
register_login_routes.get("/logout", (req, res) => {
    req.logOut()
    res.redirect("/")
})

function isloggedin(req, res, next) {
    if (req.isAuthenticated())
        next()
    else {
        res.redirect("/login")
    }
}
module.exports = register_login_routes