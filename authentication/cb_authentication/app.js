// declaring all requirements
var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require('passport-local').Strategy,
    user = require("./models/user"),
    session = require('express-session');


//connecting database

mongoose.connect("mongodb://localhost:27017/authenticate_demo", { useNewUrlParser: true, useUnifiedTopology: true })

// setting up ejs layouts

app.set('views', __dirname + '/views')
app.set("view engine", "ejs")



//middlewares for sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

//using middlewares for using body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session())
passport.serializeUser(function(user, done) {
    done(user.username);
});

passport.deserializeUser(function(username, done) {
    User.findOne({ username: username }, function(err, user) {
        if (err) {
            done(err);
        } else {
            if (!user)
                done(new Error("NO such user"))
            else {
                done(null, user);
            }
        }
    });
});
//middlewares for passport js

passport.use(new LocalStrategy(
    function(username, password, done) {
        user.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'No user exist' });
            } else {
                if (password === user.password)
                    return done(null, user);
                else {
                    return done(null, false, { message: 'Password does not match' });
                }
            }
        });
    }
));
//routes for the authentication
app.get("/login", (req, res) => {
    res.render("login")
})
app.get("/private", (req, res) => {
    if (!req.user)
        res.redirect("/login")
    res.send("hello you are now doomed")
})
app.post("/login",
    passport.authenticate('local', {
        successRedirect: '/private',
        failureRedirect: '/login',
    }))

app.get("/signup", (req, res) => {
    res.render("signup")
})
app.post("/signup", (req, res) => {
    user.create({
        username: req.body.username,
        password: req.body.password
    }, (err, user) => {
        res.redirect("/login")
    })
})

//starting server
app.listen(3000, () => {
    console.log("server started")
})