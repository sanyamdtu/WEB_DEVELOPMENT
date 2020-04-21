var express = require("express"),
    server = express(),
    mongoose = require('mongoose'),
    passport = require("passport"),
    passport_local = require("passport-local"),
    camps_with_info_db = require("./models/camps"),
    comments_db = require("./models/comment"),
    user = require("./models/user")

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useUnifiedTopology: true, useNewUrlParser: true })
var seedDb = require("./seed")
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
server.get('/', (req, res, next) => {
    res.render("landing")
})
server.get('/camp', (req, res, next) => {
    camps_with_info_db.find({}, (err, camps) => {
        if (err)
            console.log(err)
        else
            res.render("camps", { camps: camps })
    })
})
server.post('/camp', (req, res) => {
    camps_with_info_db.create({
        name: req.body.name,
        image: req.body.url,
        desc: req.body.desc
    }, (err, camp) => {
        if (err)
            console.log(err)
        else {
            console.log("inserted")
            console.log(camp)
        }
        res.redirect('/camp')
    })
})
server.get('/camp/new', (req, res) => {
    res.render("new")
})
server.get('/camp/:id', (req, res) => {
    camps_with_info_db.findById(req.params.id).populate("comments").exec((err, camp) => {
        if (err)
            console.log(err)
        else {
            console.log(camp)
            res.render("show", { camp: camp })
        }
    })
})
server.get("/camp/:id/comments/new", isloggedin, (req, res) => {
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (err)
            console.log(err)
        else {
            res.render("comment_new.ejs", { camp: camp })
        }
    })
})
server.post("/camp/:id/comments", isloggedin, (req, res) => {
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

/////
//========== 
//register routes

server.get("/register", (req, res) => {
    res.render("register.ejs")
})

server.post("/register", (req, res) => {

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
server.get("/login", (req, res) => {
    res.render("login")
})
server.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}))
server.get("/logout", (req, res) => {
    req.logOut()
    res.redirect("/")
})

//=====================================
//middlewares
//=====================================
function isloggedin(req, res, next) {
    if (req.isAuthenticated())
        next()
    else {
        res.redirect("/login")
    }
}
server.listen(3434, () => {
    console.log("server has started")
})