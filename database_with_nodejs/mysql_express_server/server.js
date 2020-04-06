var express = require('express')
var server = express()
var path = require('path')
var route_pages = require('./route/pages')
var route_api = require('./route/api')
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/', express.static(path.join(__dirname + '/public_static')))
server.use('/pages', route_pages)
server.use('/api', route_api)
server.listen(5656)