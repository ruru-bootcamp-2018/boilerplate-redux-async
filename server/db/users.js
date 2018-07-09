// server/db/users.js
const connection = require('./connection')
const hash = require('../auth/hash')

const jwt = require('jsonwebtoken')


function createUser(username, password, conn) {
    const passwordHash = hash.generate(password)
    const db = conn || connection
    return db('users')
        .insert({ username, hash: passwordHash })
}

function userExists(username, conn) {
    const db = conn || connection
    return db('users')
        .count('id as n')
        .where('username', username)
        .then(count => {
            return count[0].n > 0
        })
}

function getUserByName(username, conn) {
    const db = conn || connection
    return db('users')
        .select()
        .where('username', username)
        .first()
}

function issue(req, res) {
    getUserByName(req.body.username)
        .then(user => {
            const token = createToken(user, process.env.JWT_SECRET)
            res.json({
                message: 'Authentication successful.',
                token
            })
        })
}

function createToken(user, secret) {
    return jwt.sign({
        id: user.id,
        username: user.username
    }, secret, {
            expiresIn: '1d'
        })
}
module.exports = {
    createUser,
    userExists,
    getUserByName,
    issue,
    createToken
}