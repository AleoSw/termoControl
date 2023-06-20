const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('material/material')
})
router.get('/register', (req, res) => {
    res.render('material/registrar')
})
router.get('/search', (req, res) => {
    res.render('material/consultar')
})
router.get('/modify', (req, res) => {
    res.render('material/modificar')
})
router.get('/status', (req, res) => {
    res.render('material/estado')
})

module.exports = router;