const express = require('express')
const server = express()
const router = require('./routes/router')
const port = process.env.port || 3000

server.use('/', router)

server.set('view engine', 'ejs')

server.listen(port, ()=> console.log(`The Port's power is almighty...`))