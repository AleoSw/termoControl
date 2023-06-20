const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('reports/reports')
})
router.get('/search', (req, res) => {
    res.render('reports/consultar')
})

module.exports = router;