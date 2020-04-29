var express = require("express"),
    request = require("request"),
    util = require("util")

let promise = util.promisify(request)


promise('http://www.google.com').then(function(error, response, body) {})
    .catch((err) => { console.log(err) })