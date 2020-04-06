    let fs = require('fs');
    console.log("perfectly balanced as all things should be")
    fs.writeFile(__dirname + '/test.txt', "the text should probably grt written on the my file named text file automtically", function(err) {
        if (err) throw (err) //the throw is used to crash the scrpt when there is an 
            //error in openning the program the file iis not being open just like in dfh
        console.log("the file is created and probably erased")
    })
    console.log("the work is done")
        //the file ops work much more or less like dfh and in it we need to create a 
        //a variable just like fin fout and it is used to get the
        //file created and to append like in dfh the write file does the same
        //like replacing the original file and creating its own
        //the __dirname is used to get the file gets stored in the same directory in which
        //the js file is kept