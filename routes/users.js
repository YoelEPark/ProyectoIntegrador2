var express = require('express');
var router = express.Router();
const userController = require('../Cotrollers/userController')


/* GET users listing. */
router.get('/', userController.user)

module.exports = router;
