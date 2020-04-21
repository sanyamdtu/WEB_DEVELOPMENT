var mongoose = require('../node_modules/mongoose')
mongoose.connect("mongodb://localhost:27017/yelp_camp", { useUnifiedTopology: true, useNewUrlParser: true })
var comment_schema = new mongoose.Schema({
    title: String,
    author: String
})
var comments_db = mongoose.model("comments_db", comment_schema)
module.exports = comments_db;