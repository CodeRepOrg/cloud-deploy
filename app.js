'use strict'

require('dotenv').config();

const express = require("express")
const cors = require('cors')
const app = express()

//Set port
const port = process.env.port || 8080;
app.set('port', port);

//Data parsers for the request body
app.use(express.json())

//Allowing CORS to FRONTEND reqs in another domain
app.use(cors())
app.get('/h', (req, res) => {
    res.send("djaqdjwiwq");
});

//Error handling
app.use((error, req, res, next) => {
    return res.status(500).send({ error })
})

app.use(express.static('ja/build'))

//Starts the application server 
app.listen(port, function () {
    console.log("Server running at: http://localhost:" + port);
})

module.exports = app