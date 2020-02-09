function download(url) {
    let filename = url.split(":")[0]
    if (!filename)
        reject(new console.error("the url does not start with http"));
    else {
        return new Promise(function(resolve, reject) {
            console.log("the file is starting to download")
            setTimeout(function() {
                console.log("the file has downloaded after 3 seconds")
            }, 3000)
            let filename = url.split("/")[1] + "/downloaded/desktop";
            resolve(filename)
        })
    }
}

function resize(filename) {
    let name = filename.split(".")[1] + "resized_at_png"
    if (!name) {
        reject(new console.error("the file cannot be resized as extension png"))
    } else {
        return new Promise(function(resolve, reject) {
            console.log("the file is starting to be resize")
            setTimeout(() => {
                console.log("the file is resized after 3 seconds")
            }, 3000);
            resolve(name);
        })
    }
}

function upload(resizedfilename) {
    let uploadfilename = resizedfilename.split(_at)[1] + "uploaded_at_web services";
    return new Promise(function(resolve, reject) {
        console.log("the file is starting to upload")
        setTimeout(() => {
            console.log("the file is uploaded  to the " + uploadfilename)
        }, 3000);
        resolve(uploadfilename);
    })
}
let start = download("http:bytenet/friends/profilepic.png")
    .then(resize)
    .then(upload)
    .catch(err) {

    }