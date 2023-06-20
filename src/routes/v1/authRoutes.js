const express = require('express')
const router = express.Router()

router
    .get('/login', (req, res) => {
        res.render('auth/login')
    })
    .get('/signup', (req, res) => {
        res.render('auth/signup')
    })
    .get('/logout', (req, res) => {
        res.redirect('/')
    })

module.exports = router;