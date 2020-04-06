var route = require('express').Router()
var std = [{
        name: "Naruto Oozmaki",
        power: "shadow clone",
        special: "rasengan"
    },
    {
        name: "sasuke uchiha",
        power: "sharingan",
        special: "chitori"
    },
    {
        name: "Kakashi Hatake",
        power: "chitori",
        special: "mangekyo sharingan"
    },
    {
        name: "shikamaru",
        power: "shadow paralysis",
        special: "shadow grasp"
    }
]
route.get('/', (req, res, next) => {
    res.send(std)
})
route.get('/add', (req, res, next) => {
    std.push({
        name: req.query.name,
        power: req.query.power,
        std: req.query.special,
    })
    res.send(std)
})
route.get('/:id', (req, res, next) => {
    res.send(std[req.params.id])
})
module.exports = route