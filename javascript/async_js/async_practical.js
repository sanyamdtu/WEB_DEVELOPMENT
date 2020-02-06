function downloadedfile(url_of_file, download) {
    console.log("file is being downloaded from " + url_of_file);
    let filepath = url_of_file.split("/")[1] + "/downloads"
    setTimeout(function() {
        download(filepath);
    }, 3000);
}

function resizefile(resize, path) {
    let rpath = path + "/resizedatthispc"
    setTimeout(function() {
        resize(rpath);
    }, 3000)
}

function uploadfile(upload, rp) {
    let uploadpath = rp + "/uploadedtoaws"
    setTimeout(function() {
        upload(uploadpath);
    }, 3000);
}
downloadedfile("www.animepahe/detectiveconan/", function(filepathdownloads) {
    console.log("file is downloaded at the " + filepathdownloads);
    resizefile(function(resizedpath) {
        console.log("file is resized at " + resizedpath);
        uploadfile(function(newpath) {
            console.log("file is uploaded at the location:" + newpath);
        }, resizedpath);
    }, filepathdownloads)
})