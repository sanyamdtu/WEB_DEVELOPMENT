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
            }, 1000);
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
            }, 1000);
        }
    })
}

function uploading_function(upload_location) {
    return new Promise((resolve, reject) => {
        let upload_website = "www.upload" + upload_location + "/uploaded"
        console.log("The file is being uploaded at " + upload_location)
        if (upload_website.search("w") === -1)
            reject(new Error("The fie is not a part of deep network"))
        else {
            setTimeout(() => {
                console.log("The file is uploaded successfully at " + upload_website)
                console.log("Task is done successfully")
                resolve();
            }, 1000);
        }
    })
}
async function task1() {
    const download = await (downloadfile("http://file,com/image1.jpg"))
    const compress = await (compressing_function(download))
    await (uploading_function(compress))
}

async function task2() {
    const download = await (downloadfile("http://file,com/hello2.jpg"))
    const compress = await (compressing_function(download))
    await (uploading_function(compress))
}

async function task3() {
    const download = await (downloadfile("http://file,com/alright3.jpg"))
    const compress = await (compressing_function(download))
    await (uploading_function(compress))
}
Promise.all([task1(), task2(), task3()])
    .then(console.log("default"))
    .catch((err) => console.error(err))