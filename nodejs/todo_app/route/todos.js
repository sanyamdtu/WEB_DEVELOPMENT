let task = ["gatheer the tail beasts", "the world must understand the pain"]
var route = require('express').Router()
route.get('/todo', (req, res) => {
    res.render('../views/todo', { todo: task })
})
route.post('/todo', (req, res) => {
        task.push(req.body.task)
        res.redirect('/todo/todo')

    })
    // route.get('/sanyam', (req, res) => {
    //     res.send("hello")
    // })
module.exports = route