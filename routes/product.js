const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/product', productController.product);
router.get('/product/productadd', productController.add);
module.exports = router;