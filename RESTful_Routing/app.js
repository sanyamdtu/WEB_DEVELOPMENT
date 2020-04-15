var
    express = require('express'),
    mongoose = require('mongoose'),
    meth_override = require("method-override"),
    sanitizer = require("sanitizer"),
    app = express()

app.set('views', __dirname + '/views')
app.set("view engine", 'ejs')
app.use(meth_override("_method"));
app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect("mongodb://localhost:27017/blog_help_db", ({ useUnifiedTopology: true, useNewUrlParser: true }))
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now() }
})
var blogs = mongoose.model("blog", blogSchema)
app.get("/blogs", (req, res) => {
    blogs.find({}, (err, blogs) => {
        if (err)
            console.log(err)
        else {
            res.render("index", { blogs: blogs })
        }
    })
})

app.get("/blogs/new", (req, res) => {
    res.render("new")
})
app.post("/blogs", (req, res) => {
    req.body.body = sanitizer.sanitize(req.body.body)
    blogs.create({
        title: req.body.title,
        image: req.body.image,
        body: req.body.body,
        created: Date.now()
    }, (err, blog) => {
        if (err) {
            console.log(err)
        } else {
            console.log(blog)
            res.redirect('/blogs')
        }
    })
})
app.get("/blogs/:id", (req, res) => {
    blogs.findById(req.params.id, (err, blog) => {
        if (err)
            console.log(err)
        else {
            res.render("blog", { blog: blog })
        }
    })
})
app.put("/blogs/:id", (req, res) => {
    req.body.blog_new.body = sanitizer.sanitize(req.body.blog_new.body)
    blogs.findByIdAndUpdate(req.params.id, req.body.blog_new, (err, blog) => {
        if (err)
            console.log(err)
        else {
            res.redirect("/blogs/" + req.params.id)
        }
    })
})
app.delete("/blogs/:id", (req, res) => {
    blogs.findByIdAndRemove(req.params.id, (err) => {
        if (err)
            console.log(err)
        else {
            res.redirect("/blogs")
        }
    })
})
app.get("/blogs/:id/edit", (req, res) => {
    blogs.findById(req.params.id, (err, blog) => {
        if (err)
            console.log(err)
        else {
            res.render("edit", { blog: blog })
        }
    })
})
app.listen(5653, () => {
    console.log("Server has started")
})