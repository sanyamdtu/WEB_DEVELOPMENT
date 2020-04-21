var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    local_strategy = require("passport-local"),
    user = require("./models/user")

passport_local_mongoose = require("passport-local-mongoose")
mongoose.connect("mongodb://localhost:27017/auth_demo_app", { useUnifiedTopology: true, useNewUrlParser: true })
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require("express-session")({
    secret: "The world must understand pain",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new local_strategy(user.authenticate()))
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())

///===============================================
//routes
///==============================================
app.get("/", (req, res) => {
    res.render("home")
})
app.get('/secret', (req, res) => {
    res.render("secret.ejs")
})
app.get("/register", (req, res) => {
    res.render("register.ejs") //show signup form
})
app.post("/register", (req, res) => {
        req.body.username
        req.body.password
        user.register(new user({ username: req.body.username }), req.body.password, (err, user) => {
            if (err) {
                console.log(err)
                return res.render("register")
            } else {
                //to change use twitter,facebook with google
                passport.authenticate("local")(req, res, () => {
                    res.redirect("/secret")
                })
            }
        })
    })
    ////////////////
    //=================
    //login routes
app.get("/login", (req, res) => {
        res.render("login")
    })
    //middlewares
app.post("/login", passport.authenticate("local", { successRedirect: "/secret", failureRedirect: "/login" }), (req, res) => {})
app.listen(3466, () => console.log("server started"))