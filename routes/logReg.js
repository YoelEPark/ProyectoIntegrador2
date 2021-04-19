const express = require('express');
const router = express.Router();
const logRegController = require ('../controllers/logRegController')

router.get('/', logRegController.login);
router.get('/', logRegController.register);

module.exports = router;