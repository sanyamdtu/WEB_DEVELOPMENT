var route = require('express').Router()
var teach = [{
        name: "Asuma sarutobi",
        power: "wind chakra",
        special: "wind power"
    },
    {
        name: "Giraya",
        power: "summoniing Jutsu",
        special: "rasengan"
    },
    {
        name: "Kakashi Hatake",
        power: "chitori",
        special: "mangekyo sharingan"
    },
    {
        name: "Lady Tsunade",
        power: "strength",
        special: "medical Ninjutsu"
    }
]
route.get('/', (req, res, next) => {
    res.send(teach)
})
route.get('/:id', (req, res, next) => {
    res.send(teach[req.params.id])
})
module.exports = route