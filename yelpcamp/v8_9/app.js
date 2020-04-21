var express = require("express"),
    server = express(),
    mongoose = require('mongoose'),
    passport = require("passport"),
    passport_local = require("passport-local"),
    user = require("./models/user"),
    seedDb = require("./seed"),
    camp_route = require("./routes/camps"),
    comments_route = require("./routes/comments"),
    index_routes = require("./routes/index")

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useUnifiedTopology: true, useNewUrlParser: true })
seedDb()
server.set('views', __dirname + '/views')
server.set('view engine', "ejs")
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(__dirname + "/public"))

///======================
//passport middlewares
server.use(require("express-session")({
    secret: 'The world Must Understand Pain',
    resave: false,
    saveUninitialized: false,
}))
server.use(passport.initialize())
server.use(passport.session())
passport.use(new passport_local(user.authenticate()))
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())

server.use((req, res, next) => {
    res.locals.current_user = req.user
    next()
        ////the middle wares for signed in and logout
})

server.use("/", index_routes)
server.use("/camp", camp_route)
server.use("/camp/:id/comments", comments_route)
server.listen(3434, () => {
    console.log("server has started")
})