const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sanyam',
    password: 'root',
    database: 'mytest'
});
connection.query(
    `Select * from persons`,
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