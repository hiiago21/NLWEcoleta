const sqlite3 = require('sqlite3').verbose()


const db = new sqlite3.Database("./src/database/data.db")

module.exports = db

// db.serialize(() => {
// //     // db.run(`
// //     //     CREATE TABLE IF NOT EXISTS places (
// //     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     //         name TEXT,
// //     //         image TEXT,
// //     //         adress TEXT,
// //     //         numberAdress TEXT,
// //     //         state TEXT,
// //     //         city TEXT,
// //     //         items TEXT
// //     //     );
// //     // `)

// // //     const query = `
// // //     INSERT INTO places(
// // //         name,
// // //         image,
// // //         adress,
// // //         numberAdress,
// // //         state,
// // //         city,
// // //         items
// // //     ) VALUES(?,?,?,?,?,?,?);
// // //     `

// // //     function afterInsertData(err) {
// // //         if (err) {
// // //             return console.log(err)
// // //         }

// // //         console.log("Cadastro efetuado com sucesso!")
// // //         console.log(this)
// // //     }

// //     // db.run(query, values, afterInsertData)

// //     const queryConsult = `SELECT * FROM places`

// //     // db.all(queryConsult, function(err, rows){
// //     //     if(err){
// //     //         return console.log(err)
// //     //     }

// //     //     console.log("Aqui estão seus registros:")
// //     //     console.log(rows)
// //     // })


//     const queryDelete = `DELETE FROM places`
//     db.run(queryDelete, function (err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Registro deletado")
//     })

// })