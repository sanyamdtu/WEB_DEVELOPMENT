var app = require('express')()
var student = require('./data/student')
var teacher = require('./data/teacher')
app.set('view engine', 'ejs');
app.get('/', (req, res, next) => {
    res.render('home')
})
app.use('/teacher', teacher)
app.use('/student', student)
app.listen(6656)