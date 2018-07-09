const express = require('express')
const passport = require('passport')

const authRoutes = require('./routes/auth')

const server = express()
server.use(passport.initialize())
server.use(express.json())
// server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/auth', authRoutes)

module.exports = server
