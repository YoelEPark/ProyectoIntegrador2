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
router.post('/add', upload.single('img'), productController.store);
router.post('/destroy/:id', productController.destroy);

router.get('/id/:id', productController.detalle);
router.post('/id/:id/comment',productController.addComment);
router.post('/destroyComment/:id',productController.destroyComment)

router.get('/editproduct/:id', productController.editProduct);
router.post('/editproduct/:id', upload.single('img'), productController.updateProduct);

router.get('/results', productController.search);


module.exports = router;