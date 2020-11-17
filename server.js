const { instances } = require('browser-sync');
const { static } = require('express');
const express = require('express');
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express();

server.use(express.urlencoded( { extended:true }) )
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape:static,
    noCache:false
})


server.listen(5000)