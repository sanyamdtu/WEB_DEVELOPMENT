var server = require('express')()
server.set('views', (__dirname + '\views'));
server.set('view engine', 'ejs');
server.get('/:char', (req, res) => {
    var thing = req.params.char
    res.render('index.ejs', { char: thing })


})
server.listen(5656)