const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

const porta = 8081

const db = require("./database/db")

server.use(express.static("public"))

server.use(express.urlencoded({
    extended: true
}))


nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})



server.get("/", (req, res) => {
    return res.render("index.html")
})


server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    const query = 
    `
            INSERT INTO places(
                name,
                image,
                adress,
                numberAdress,
                state,
                city,
                items
            ) VALUES(?,?,?,?,?,?,?);
    `
    
    console.log(req.body)

    const values =[
        req.body.name,
        req.body.image,
        req.body.adress,
        req.body.numberAdress,
        req.body.state2,
        req.body.city,
        req.body.items
    ]
    

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastro efetuado com sucesso!")
        console.log(this)

        return res.render("create-point.html" ,{saved:true})
    } 


    db.run(query, values, afterInsertData)

})




server.get("/search-results", (req, res) => {

    
        const search = req.query.search

        if(search.length == 1){
            return res.render("search-results.html", {  total: 0})
        }        

        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
            if (err) {
                return console.log(err)
            }

            const total = rows.length

            return res.render("search-results.html", { places: rows, total })
        })
    })
    
server.listen(porta)
