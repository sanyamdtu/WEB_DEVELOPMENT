const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sanyam',
    password: 'root',
    database: 'mytest'
});

function getdata() {
    return new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM persons ',
            function(err, rows, cols) {
                // results contains rows returned by server
                // fields contains extra meta data about results, if available
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}

function addata(id, name, age) {
    return new Promise((resolve, reject) => {
        // console.log(id)
        // console.log(name)
        // console.log(age)
        //${id},'${name}',${age}

        connection.query(
            `INSERT INTO PERSONS(id,name,age) 
            VALUES(?,?,?)`, [id, name, age],
            function(err, rows, cols) {
                if (err)
                    reject(err)
                else
                    resolve(rows)
            }
        )
    })
}
module.exports = {
    getdata,
    addata
};