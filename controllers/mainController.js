const db = require ('../database/models'); //requerimos la conexion a la base de datos y todos los modelos

const mainController = {
    index: function(req, res){
        
        db.Producto.findAll()
        .then( data => {
            return res.render ('index', { productos:data })
           
        })
        .catch(error =>{
            console.log(error);
        })
    }

}


module.exports = mainController;