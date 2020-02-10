function download(url) {
    return new Promise(function(resolve, reject) { //the promise is returned here
        //after the functiom is called and is used by the 
        let filename = url.split(":")[0]
        console.log(filename.toString());
        if (!filename.toString().startsWith("http"))
            reject(new Error("the url does not start with http"));
        else { //the error message is dispalyed at the cosnole
            console.log("the file is starting to download " + filename)
            setTimeout(function() {
                //          console.log("the file has downloaded after 3 seconds")
                filename = url.split("/")[1] + "/downloaded/desktop.png";
                resolve(filename) //to be used by then in case of using it as arguements
            }, 3000)
        }
    })
}

function resize(filename) {
    return new Promise(function(resolve, reject) {
        let name = filename.split("/")[1] + "resized_at_png"
        if (!filename.endsWith(".png")) {
            reject(new Error("the file cannot be resized as extension png"))
        } else {
            console.log("the file is starting to be resize " + name)
            setTimeout(() => {
                resolve(name);

                //    console.log("the file is resized after 3 seconds")
            }, 3000);
        }
    })
}

function upload(resizedfilename) {
    return new Promise(function(resolve, reject) {
        let uploadfilename = resizedfilename.split("")[1] + "uploaded_at_web services";
        console.log("the file is starting to upload " + uploadfilename)
        setTimeout(() => {
            //      console.log("the file is uploaded  to the " + uploadfilename)
            resolve(uploadfilename);
        }, 3000);
    })
}
Promise.all([
        download("http:dragaonballz/goku.png"), //as thiswas an array of objects for up
        //-uploading the file and resizing etc,.
        //the promise .all is uesd to create an array of promise even if ne promise is \
        //not resolved then the code will show an error all should be working exactly
        // resolved  
        download("http:dragaonballz/vegeta.png"),
        download("http:dragaonballz/gohan.png")
    ])
    .then(function(downloadvalues) {
        return Promise.all(downloadvalues.map(resize))
            //the return promise.all line returns the values of then function of
            //the values of the promise is 
    })
    .then(function(resizevalues) {
        return Promise.all(
            resizevalues.map(upload)
        )
    })
    .then(function(uploadvalues) {
        console.log(uploadvalues)
    })