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

        db.Producto.findByPk(id, {
            include:[
                {association : 'comment'},
                {association: 'user'}
            ]
        })
        //return res.send(data)
            .then(data =>{
                return res.render('products', { Productos: data });
            })
            .catch(error =>{
                console.log(error);
            })
    },
    search: function(req, res){
        let infoABuscar = req.query // obtengo la info de la querystring

        db.Producto.findAll({ 
            where: [
                { title: {[op.like]: '%'+infoABuscar+'%'}}
            ]})
        .then( data => {
            return res.send('index', {Productos :data});
        })
        .catch( error => {
            console.log(error);
        })

    }
        
}
   

module.exports = productController;