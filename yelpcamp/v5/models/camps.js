var mongoose = require('../node_modules/mongoose')
var comments_db = require("./comment")
mongoose.connect("mongodb://localhost:27017/yelp_camp", { useUnifiedTopology: true, useNewUrlParser: true })
var camp_schema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments_db"
    }]
})
var camps_with_info_db = mongoose.model("camps_with_info_db", camp_schema)
module.exports = camps_with_info_db