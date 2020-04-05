var sanyam;
var prompt = require('prompt');
prompt.start();
for (var i = 0; i < 10; i++) {
    prompt.get(['sa'], function(err, result) {
        console.log('you typed ' + result.sa);
        sanyam = sanyam + result.sa;
        const fs = require('fs')
    });

}
fs.writeFile(__dirname + "/input.txt", result.sa, function(err) {
        // const readline = require('readline').createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // })
        if (err) throw err;
        console.log("file must have been created")
    })
    //console.log(readline);
    /* 
        const readline = require('readline').createInterface({
          input: process.stdin,
          output: process.stdout
        })

        readline.question(`What's your name?`, name => {
          console.log(`Hi ${name}!`)
          readline.close()
        })
    */
    //