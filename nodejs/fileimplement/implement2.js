var fs = require('fs');
fs.readFile(__dirname + '/input.txt', (err, data) => {
    if (err) throw err;
    console.log("the file is being read from the buffer")
    console.log(data.toString());
    var arr = data.toString().split("\r\n"); //supposedly the log files get this character 
    //in case of opening as it shows something up there
    console.log(arr)
    var visited = []
    arr.map((sample) => {
        arr.map((word) => {
            if (!(sample === word)) {
                visited.push(sample)
            } else {
                arr.pop(word);
            }
        })
    })
    console.log(visited);
})