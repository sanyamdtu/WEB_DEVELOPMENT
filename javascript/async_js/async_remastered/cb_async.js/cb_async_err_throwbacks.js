function downloadfile(url, compress_function) {
    let saving_location = url.split('/').pop()
    console.log("The download is beginning from " + url)
    if (!url.startswith("http://")) {
        return downloadfile(new error("the file downloading site does not have http"))
    } else {
        setTimeout(() => {
            console.log("The file is downloaded at " + saving_location)
            compress_function(null, saving_location);
        }, 2000);
    }
}

function compressing_function(err, saved_location, uploading_function) {
    let uploading_location = saved_location.split('.')[0] + ".zip/uploads"
    console.log("The file is starting to be compressed from " + saved_location)
    if (saved_location.endswith(".jpg")) {
        return uploading_function(new error("the file to be compressed does not ends with jpg"))
    } else {
        setTimeout(() => {
            console.log("The file is compressed and saved to " + uploading_location)
            uploading_function(null, uploading_location)
        }, 2000);
    }

}

function uploading_function(err, upload_location) {
    let upload_website = "www.upload" + upload_location.split("/")[0] + "/uploaded"
    console.log("The file is being uploaded at " + upload_location)
    setTimeout(() => {
        console.log("The file is uploaded successfully at" + upload_website)
        console.log("Task is done successfully")
    }, 3000);
}
downloadfile("www.file.com/image.jpg", function(err, file) {
    if (err)
        throw (err)
    compressing_function(file, function(upload) {
        if (err)
            throw (err)
        uploading_function(upload)
    })
})