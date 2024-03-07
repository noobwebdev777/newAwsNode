const path = require('path')

const express = require('express') 

// const mysql = require('mysql')
// const connect = mysql.createConnection({
//     host: 'database-1.cz0iiki2sghw.eu-north-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'rahul2021',
//     database: 'awsnode'
// })

// connect.connect()

// connect.query('create table ')

const app = express()

app.listen(3000,() => console.log('this server is running at port:3000')) 

// console.log(app)

app.get('/',(request,response) => {
    console.log('got the request')
    response.status(200).json([{name: 'hello', age: 24}])
})

app.get('/home', (request, response) => {
    console.log('send html file')
    const filePath = path.join(__dirname+'/html','index.html')
    response.sendFile(filePath)
})

app.get('/info', (req,res) => {
    console.log('api request for info.html has reived')
    const filePath = path.join(__dirname+'/html','info.html')
    res.sendFile(filePath)
})

app.get('/info/:id', (req,res) => {
    console.log(req.params)
    console.log('hello world')
})

app.use(express.json())

app.post('/book', (req,res) => {
    const bookDetails = req.body
})








