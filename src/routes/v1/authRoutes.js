const express = require('express')
const router = express.Router()

router
    .get('/login', (req, res) => {
        res.render('auth/login')
    })
    .get('/signup', (req, res) => {
        res.render('auth/signup')
    })
    .post('/signup', async (req, res) => {
        const {id, email, password} = req.body;
        console.log(id, email, password)
        res.redirect('/dashboard')
    })
    .get('/logout', (req, res) => {
        res.redirect('/')
    })

module.exports = router;