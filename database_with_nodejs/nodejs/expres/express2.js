var express = require('express')
var server = express()
server.get('/:todo', (req, res, next) => {
    //the req.params is used to get the name from the url 
    //but querry is used 

    let greet = "hello "
    switch (req.params.todo) {
        case 'greet':
            greet = greet + "good old "
            break
        case 'angry':
            greet = greet + " annoying "
            break
        default:
            greet = greet + " girono "
    } //any varibles can be accessed
    greet = greet + req.query.name
    res.send(greet)
})
server.listen(8000)