function downloadfile(url) {
    return new Promise((resolve, reject) => {
        let saving_location = url.split('/').pop()
        console.log("The download is beginning from " + url)
        if (!url.startsWith("http://")) {
            reject(new Error("the file downloading site does not have http"))
        } else {
            setTimeout(() => {
                console.log("The file is downloaded at " + saving_location)
                resolve(saving_location)
            }, 2000);
        }
    })
}

function compressing_function(saved_location) {
    return new Promise((resolve, reject) => {
        let uploading_location = saved_location.split('.')[0] + ".zip/uploads"
        console.log("The file is starting to be compressed from " + saved_location)
        if (!saved_location.endsWith(".jpg")) {
            reject(new Error("the file to be compressed does ends with jpg"))
        } else {
            setTimeout(() => {
                console.log("The file is compressed and saved to " + uploading_location)
                resolve(uploading_location)
            }, 2000);
        }
    })
}

function uploading_function(upload_location) {
    return new Promise((resolve, reject) => {
        let upload_website = "www.upload" + upload_location + "/uploaded"
        console.log("The file is being uploaded at " + upload_location)
        if (!upload_website.search("w") === -1)
            reject(new Error("The fie is not a part of deep network"))
        else {
            setTimeout(() => {
                console.log("The file is uploaded successfully at " + upload_website)
                console.log("Task is done successfully")
                resolve();
            }, 3000);
        }
    })
}

downloadfile("http://www.file.com/image.jpg")
    // .then((saved) => {
    //     compressing_function(saved)
    //         .then((comp) => {
    //             uploading_function(comp)
    //                 .catch((err) => console.error(err))
    //         })
    //         .catch((err) => console.error(err))
    // })
    // .catch((err) => console.error(err))
    .then((saved) => compressing_function(saved))
    .then((comp) => uploading_function(comp))
    .catch((err) => console.log(err))