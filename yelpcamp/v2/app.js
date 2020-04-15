// var camps = [
//     { title: "The camp of Pain", image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
//     { title: "The camp of Sharingan", image: "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
//     { title: "The camp of hidden leaves", image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
//     { title: "The camp of hidden leaves", image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
//     { title: "The camp of hidden leaves", image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
//     { title: "The camp of hidden leaves", image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
//     { title: "The camp of hidden leaves", image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
//     { title: "The camp of hidden leaves", image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
// ]
var express = require("express")
var server = express()
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/yelp_camp", { useUnifiedTopology: true, useNewUrlParser: true })
var camp_schema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String
})
var camps_with_info_db = mongoose.model("camps_with_info_db", camp_schema)
    // camps_with_info_db.create({
    //     name: "The camp of hidden leaves",
    //     image: "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
    // }, (err, camp) => {
    //     if (err)
    //         console.log(err)
    //     else {
    //         console.log("Newly Created Campground")
    //         console.log(camp)
    //     }
    // })
server.set('views', __dirname + '/views')
server.set('view engine', "ejs")
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
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
    camps_with_info_db.findById(req.params.id, (err, camp) => {
        if (err)
            console.log(err)
        else {
            res.render("show", { camp: camp })
        }
    })
})
server.listen(3434, () => {
    console.log("server has started")
})