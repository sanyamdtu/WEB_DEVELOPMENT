function downloadfile(url, compress_function) {
    let saving_location = url.split('/').pop()
    console.log("The download is beginning from " + url)
    setTimeout(() => {
        console.log("The file is downloaded at " + saving_location)
        compress_function(saving_location);
    }, 2000);
}

function compressing_function(saved_location, uploading_function) {
    let uploading_location = saved_location.split('.')[0] + ".zip/uploads"
    console.log("The file is starting to be compressed from " + saved_location)
    setTimeout(() => {
        console.log("The file is compressed and saved to " + uploading_location)
        uploading_function(uploading_location)
    }, 2000);
}

function uploading_function(upload_location) {
    let upload_website = "www.upload" + upload_location.split("/")[0] + "/uploaded"
    console.log("The file is being uploaded at " + upload_location)
    setTimeout(() => {
        console.log("The file is uploaded successfully at" + upload_website)
        console.log("Task is done successfully")
    }, 3000);
}
// downloadfile("", function(file) {
//     compressing_function(file, function(upload) {
//         uploading_function(upload)
//     })
// })
var util = require('util')
var download_File_promise = util.promisify(downloadfile)
var compress_function_promise = util.promisify(compressing_function)
var uploading_function_promise = util.promisify(uploading_function)
download_File_promise("www.file.com/image.jpg")
    .then((save) => compress_function_promise(save))
    .then((hello) => uploading_function_promise(hello))
    .catch((err) => console.error(err))