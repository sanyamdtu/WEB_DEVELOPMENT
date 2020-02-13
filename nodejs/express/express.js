const express = require('express')
const server = express() //this is syntax 
    //if it is not clear how much more is still needed
server.get('/:todo/:name', (req, res, next) => {
    //    the server has two arguments which are the request and response
    //the response is send by the server and request is the service asked by the 
    //client and the next argument's significance is still unclear and cannot be 
    //further explained
    console.log(todo)
    if (res.params.todo === "code")
        console.log("always codings")
    else {
        console.log("you are doing something")
    }
    res.send('hello world  ' + req.params.todo + " " + req.params.name);
})
server.listen(2121)
    //this line opens the port and it is used to access the port in which we have used as
    // as server