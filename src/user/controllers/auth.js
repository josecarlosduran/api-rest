'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const TokenCreator = require('../TokenCreator')

function signUp (req, res) {
   
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName
    })

    user.save((err) => {
        if (err){
            return res.status(500).send({message: `Error al crear usuario: ${err}`})
        }

        return res.status(201).send({token: TokenCreator(user)})
    })

}

function signIn (req, res) {

   
}

module.exports = {
    signUp,
    signIn
}