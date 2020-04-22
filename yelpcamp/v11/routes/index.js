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
            req.flash("error", "You are not right")
            return res.redirect("/register")
        } else {
            passport.authenticate("local")(req, res, () => {
                req.flash("success", "You are registered and logged in")
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
    successRedirect: "back",
    failureRedirect: "/login"
}))
register_login_routes.get("/logout", (req, res) => {
    req.logOut()
    req.flash("success", "Logged you out")
    res.redirect("/")
})

module.exports = register_login_routes