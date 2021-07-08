require('dotenv').config()
const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000
server.use('/api', (req, res) => {
    res.json({message: "working and ready to serve!"})
})

server.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`)
})