const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.


const productController = {
    product: function(req, res){
        return res.render('product')
    },
    add: function(req, res){
        return res.render('product-add')
    },
    show: function(req, res){
        let id = req.params.id;

        db.Producto.findByPk(id)
            .then(data =>{
                return res.render('products', { productos: data });
            })
            .catch(error =>{
                console.log(error);
            })
        
    }   


}

module.exports = productController;