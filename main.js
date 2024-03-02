const path = require('path')

const express = require('express') 


const app = express()

app.listen(3000,() => console.log('this server is running at port:3000')) 

// console.log(app)

app.get('/',(request,response) => {
    console.log('got the request')
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








