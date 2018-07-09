// server/routes/example.js
const token = require('../auth/token')

router.get('/path', token.decode, (req, res) => {
  // now req.user will contain the contents of our token
})