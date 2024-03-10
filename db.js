const mysql = require('mysql')
const connect = mysql.createConnection({
    host: 'database-1.cz0iiki2sghw.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'rahul2021',
    database: 'awsnode'
})

connect.connect()

module.exports = connect