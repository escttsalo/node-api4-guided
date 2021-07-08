require('dotenv').config()
const cors = require('cors')
const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build')))
const PORT = process.env.PORT || 5000

server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'))
})

server.use('/api', (req, res) => {
    res.json({message: "working and ready to serve!"})
})

server.use((req,res)=> {
    res.json({message: "sorry could not server"})
})

server.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`)
})