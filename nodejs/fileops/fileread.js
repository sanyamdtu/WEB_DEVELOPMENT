let fs = require('fs')
console.log("jotaro your hamon training is useless ")
fs.readFile(__dirname + "/test.txt", function(err, data) {
    if (err) throw (err)
    console.log(data.toString());
    console.log("should be working probably")
})