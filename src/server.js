const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

const porta = 8081

server.use(express.static("public"))


nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})



server.get("/", (rec, res) => {
    return res.render("index.html")
})


server.get("/create-point", (rec, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (rec, res) => {
    return res.render("search-results.html")
})
server.listen(porta)
