function someasynctask(callback) {
    console.log("task is getting started"); //te task is done as a way of using timeout
    setTimeout(() => {
        console.log("the task is completed")
        callback() //this is the callback which is passed as an argument
            //this iis used to call the resolve 
    }, 3000);

}
let func = function() {
        return new Promise(function(resolve, reject) {
            someasynctask(resolve) //promise is used to get some task done by the help of 
                //of resolve reject and then 
        })
    }
    /*let someTaskPromise = function () {
        return new Promise(function (resolve, reject) {
            someAsyncTask(resolve)
        })
    }// syntax for using promise in the js file and using it to 
    //with the help of resolve and reject
    */
func()
    .then(function() {
        console.log("this work is done after task");
    }) //then is used when the work to be done is after the work is 
    //finished and we dont know what the call back is so it can also be used with help
    //of deferred resolve and the object of promise is store in the variable
    //then the<then> function is called after resolve the way after it is done