'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require ('../../config')

function createToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(config.jtwExpirationInDays).unix()
    }

    return jwt.encode(payload, config.jwtSecret)
}

module.exports = createToken