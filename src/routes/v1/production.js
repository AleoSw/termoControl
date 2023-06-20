const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('production/production')
})
router.get('/register', (req, res) => {
    res.render('production/registrar')
})
router.get('/search', (req, res) => {
    res.render('production/consultar')
})
router.get('/modify', (req, res) => {
    res.render('production/modificar')
})
router.get('/status', (req, res) => {
    res.render('production/estado')
})

module.exports = router;