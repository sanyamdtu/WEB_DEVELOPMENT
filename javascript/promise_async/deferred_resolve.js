function startdownload() {
    console.log("download is starting");
    setTimeout(function() {
        console.log("file is downloaded")
    }, 3000)
}

function downloadedfile() {
    return new Promise(function(resolve, reject) {
        startdownload();
        resolve()
    })
}
let taskdone = downloadedfile()
setTimeout(() => {
    taskdone.then(function() {
        console.log("file is resized after the file is download")
    })
}, 5000);