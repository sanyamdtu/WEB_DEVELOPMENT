var mongoose = require("mongoose")
var user_schema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
var user_db = mongoose.model("user_db", user_schema)
module.exports = user_db