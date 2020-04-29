var request = require("./node_modules/request"),
    cheerio = require("./node_modules/cheerio"),
    fs = require("fs")
var writeStream = fs.createWriteStream("scrap.csv")
    //write headers
writeStream.write(`Title,desc,price\n`)
request('https://webscraper.io/test-sites/e-commerce/allinone', function(error, response, body) {
    const $ = cheerio.load(body)
    $(".caption").each((i, el) => {
        var all_infos_title = $(el).find(".title").text()
        var all_info_price = $(el).find(".price").text()
        var all_info_desc = $(el).find(".description").text()
        writeStream.write(`${all_infos_title},${all_info_desc},${ all_info_price }\n`)
    })
});