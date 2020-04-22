var mongoose = require("mongoose");
var Camps_db = require("./models/camps");
var Comments_db = require("./models/comment");

async function seedDB() {
    try {
        await Camps_db.remove({})
        console.log("campgrounds removed")
        await Comments_db.remove({})
        console.log("comment removed")
    } catch (err) {
        console.log(err)
    }
}
module.exports = seedDB;