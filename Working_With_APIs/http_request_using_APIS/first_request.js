var request = require('request')
request('https://samples.openweathermap.org/data/2.5/weather?q=Delhi,india&appid=b6907d289e10d714a6e88b30761fae22', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body)
        console.log(parsedData["weather"][0]["main"]);
    } else {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode)
        }
    }
})