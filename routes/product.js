const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')




router.get('/', productController.product);
router.get ('/add',productController.add);
router.get('/search', productController.search)
/* GET home page. */
//router.get('/id/:id', productController.show);

module.exports = router;