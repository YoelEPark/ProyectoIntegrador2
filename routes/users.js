var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
let multer = require('multer');
let path = require('path');

//cofiguramos multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

/* GET users listing. */
router.get('/', userController.user);

router.get('/edit', userController.edit);

router.get('/login', userController.login);

router.get('/register', userController.register);   

module.exports = router;
