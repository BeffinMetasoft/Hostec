const { addShopper, addClient, viewShopper } = require('../controllers/adminController')

const router = require('express').Router()

router.post('/add-shopper',addShopper)
router.get('/view-shopper',viewShopper)
router.post('/add-client',addClient)
router.get('/view-client')


module.exports = router