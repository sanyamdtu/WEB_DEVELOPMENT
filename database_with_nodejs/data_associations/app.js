var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/data_associations", { useUnifiedTopology: true, useNewUrlParser: true })
var Postschema = new mongoose.Schema({
    title: String,
    content: String
})
var Posts = mongoose.model("Posts", Postschema);
var StudentSchema = new mongoose.Schema({
    Email: String,
    Name: String,
    Posts: [Postschema]
})
var student = mongoose.model("Student", StudentSchema)
var Post = {
    title: "Pain",
    content: "The World Must Understand Pain"
}
var user = {
    Name: "Akatsuki_underrated4",
    Email: "Pain@Akatsuki.edu",
}
student.create(user, (err, new_user) => {
    if (err)
        console.log(err)
    else {
        Posts.create(Post, (err, new_post) => {
            if (err)
                console.log(err)
            else {
                new_user.Posts.push(new_post)
                new_user.save((err, p_user) => {
                    if (err)
                        console.log(err)
                    else
                        console.log(p_user)
                })
            }
        })
    }
})




student.find({ Name: "Akatsuki_underrated4" }, (err, user) => {
    if (err)
        console.log(err)
    else {
        console.log(user.Posts)
        user.Posts.push({
            title: "Kill Jiraya",
            content: "Sensei You dont understand the meaning of Pain"
        })
        user.save((err, updated) => {
            if (err)
                console.log(err)
            else
                console.log(updated)
        })
    }
})