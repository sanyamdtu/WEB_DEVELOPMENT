var express = require("express")
var app = express();
var expressLayouts = require("express-ejs-layouts")
var mongoose = require("mongoose")

//database connected
var db = require("./config/keys").mongo_url
mongoose.connect(db)
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err))

//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//routes
app.use("/", require("./routes/index"))
app.use("/users", require("./routes/users.js"))

//starting server
app.listen(process.env.PORT || 4000, () => {
    console.log("server started at 4000")
})