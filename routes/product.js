const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
let multer = require('multer');
let path = require('path');

//cofiguramos multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/product')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })



router.get('/', productController.product);
router.get ('/add',productController.add);
//router.post('add', upload.single(bookImage), productController.store)
router.get('/search', productController.search)
/* GET home page. */
//router.get('/id/:id', productController.show);

module.exports = router;