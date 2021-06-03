const db = require ('../database/models'); //requerimos la conexion a la base de datos y todos los modelos

const mainController = {
    index: function(req, res){
        
        db.product.findAll()
        .then( data => {
            return res.render ('index', { product:data })
           
        })
        .catch(error =>{
            console.log(error);
        })
    }

}


module.exports = mainController;