// server/server.js
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')

const server = express()
server.use(passport.initialize())
// server.use(express.json())
server.use(bodyParser.json())

server.use('/api/v1/auth', authRoutes)

module.exports = server
