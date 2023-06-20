const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('inventary/inventary')
})
router.get('/register', (req, res) => {
    res.render('inventary/registrar')
})
router.get('/search', (req, res) => {
    res.render('inventary/consultar')
})
router.get('/modify', (req, res) => {
    res.render('inventary/modificar')
})
router.get('/status', (req, res) => {
    res.render('inventary/estado')
})

module.exports = router;