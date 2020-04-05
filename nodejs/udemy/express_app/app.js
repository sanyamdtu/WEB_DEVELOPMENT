var app = require('express')()
var animal = {
    dog: "woof",
    cat: "meow",
    wolf: "howl",
    lion: "roar",
    pig: "oink"
}
app.get('/', (req, res, next) => {
    res.send("what are you trying to acheive")
})
app.get("/speak/:ani", (req, res, next) => {

    var type = req.params.ani;
    var sanyam = animal[type];
    res.send(sanyam);
})
app.get('/repeat/:word/:num', (req, res, next) => {
    var ans = req.params.word;
    for (var i = 0; i < req.params.num; i++) {
        ans = ans + " " + req.params.word;
    }
    res.send(ans);
})
app.get('*', (req, res, next) => {
    res.send("page not found what are u doing with your life")
})
app.listen(5656)