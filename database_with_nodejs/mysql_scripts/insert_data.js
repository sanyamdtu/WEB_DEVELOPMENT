const mysql = require('mysql2');
var insert = {
    id: parseInt(process.argv[2]),
    name: process.argv[3],
    age: parseInt(process.argv[4])
}
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sanyam',
    password: 'root',
    database: 'mytest'
});
// var insert = {
//         id: 98,
//         name: "pain",
//         age: 67
//     }
//
connection.query(
    `INSERT INTO persons(Id,Name,Age) VALUES(
        ${insert.id},
        ${insert.name},
        ${insert.age} )`,
    function(err, rows, cols) {
        if (err) {
            console.error(err)
        } else {
            console.log(rows)
            console.log(cols)
        }
        connection.close();
    }

);

// '${insert.name}',
//         ${insert.age},
//         '${insert.city}'