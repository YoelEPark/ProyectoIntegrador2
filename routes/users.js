var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
let multer = require('multer');
let path = require('path');
const { user } = require('../controllers/userController');

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
router.get('/:id', userController.user);
router.post('/edit/:id',userController.edit);
router.post('/edit', upload.single('userImg'),userController.update)
router.post('/logout', userController.destroy);




module.exports = router;
