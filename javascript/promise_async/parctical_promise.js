function download(url) {
    return new Promise(function(resolve, reject) { //the promise is
        let filename = url.split(":")[0]
        console.log(filename.toString());
        if (!filename.toString().startsWith("http"))
            reject(new Error("the url does not start with http"));
        else {
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
let start = download("ftp:./bytenet/friends/profilepic.yhe")
    .then(resize)
    .then(upload)
    .catch(function(err) {
        console.error(err);
    })