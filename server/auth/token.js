// server/auth/token.js
const verifyJwt = require('express-jwt')
const db = require('../db/users')

function issue(req, res) {
    db.getUserByName(req.body.username)
        .then(user => {
            const token = db.createToken(user, process.env.JWT_SECRET)
            res.json({
                message: 'Authentication successful.',
                token
            })
        })
}

function decode(req, res, next) {
    verifyJwt({
        secret: getSecret
    })(req, res, next)
}

function getSecret(req, payload, done) {
    done(null, process.env.JWT_SECRET)
}

module.exports = {
    issue,
    decode,
    getSecret
}