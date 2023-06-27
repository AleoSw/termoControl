const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('inventary/inventary')
})
router.get('/warehouse-entrance', (req, res) => {
    res.render('inventary/warehouse-entrance/warehouse-entrance')
})
router.get('/warehouse-entrance/register', (req, res) => {
    res.render('inventary/warehouse-entrance/registrar')
})
router.get('/warehouse-entrance/search', (req, res) => {
    res.render('inventary/warehouse-entrance/consultar')
})
router.get('/warehouse-entrance/modify', (req, res) => {
    res.render('inventary/warehouse-entrance/modificar')
})
router.get('/warehouse-entrance/status', (req, res) => {
    res.render('inventary/warehouse-entrance/estado')
})
router.get('/purchase-order', (req, res) => {
    res.render('inventary/purchase-order/purchase-order')
})
router.get('/purchase-order/register', (req, res) => {
    res.render('inventary/purchase-order/registrar')
})
router.get('/purchase-order/search', (req, res) => {
    res.render('inventary/purchase-order/consultar')
})
router.get('/purchase-order/modify', (req, res) => {
    res.render('inventary/purchase-order/modificar')
})
router.get('/purchase-order/status', (req, res) => {
    res.render('inventary/purchase-order/estado')
})
router.get('/warehouse-exit', (req, res) => {
    res.render('inventary/warehouse-exit/warehouse-exit')
})
router.get('/warehouse-exit/register', (req, res) => {
    res.render('inventary/warehouse-exit/registrar')
})
router.get('/warehouse-exit/search', (req, res) => {
    res.render('inventary/warehouse-exit/consultar')
})
router.get('/warehouse-exit/modify', (req, res) => {
    res.render('inventary/warehouse-exit/modificar')
})
router.get('/warehouse-exit/status', (req, res) => {
    res.render('inventary/warehouse-exit/estado')
})

module.exports = router;