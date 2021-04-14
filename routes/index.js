var express = require('express');
var router = express.Router();
const indexController = require('../Cotrollers/indexController')

/* GET home page. */
router.get('/', indexController.index)


module.exports = router;
