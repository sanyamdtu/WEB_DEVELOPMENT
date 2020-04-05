var app = require('express')()
var request = require('request')
    // server.set('views', __dirname + '/views')
    // server.set('view engine', 'ejs')
    //var path = __dirname + '/views'
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index')
})
app.get("/results", (req, res) => {
    var url = "http://www.omdbapi.com/?t=" + req.query.search
    console.log(url)
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body)
            console.log(parsedData)
                //res.render('results', { movie: parsedData[title] })
        }
    })
})
app.listen(4544)

/*
http://www.omdbapi.com/?t=sa
http://www.omdbapi.com/?t=sa
*/