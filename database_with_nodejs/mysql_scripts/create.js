const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sanyam',
    password: 'root',
    database: 'mytest'
});
connection.query(
    `CREATE TABLE IF NOT EXISTS persons(
    Id INTEGER NOT NULL PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Age INTEGER
    )`,
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