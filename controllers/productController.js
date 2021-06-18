const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
let products = require('../data/librosData');
let users = require('../data/usersData')

const op = db.Sequelize.Op;



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
    search: (req, res) => {
        let QuerySearch = req.query.search;
        let paramSearch = req.params.busqueda;

        // Tomas si la palabra clave viene de req.query o req.params
        if (QuerySearch == undefined || QuerySearch == '') {
            var busqueda = paramSearch
        } else {
            var busqueda = QuerySearch
        }


        //Llamo a las bases de datos -- La de 'producto' que me traiga en funcion de la palabra clave
        
        let producto = db.Product.findAll(

            //Busqueda por nombre i DESCRIPCION >>>>>>>>>>
            {
                 where: [{
                    [op.or]: [
                        {productName : {[op.like]: `%${busqueda}%`}},
                        {productDescription: {[op.like]: `%${busqueda}%`}}
                    ] 
                    }
                    
                ],
                 
            } 
        )

     Promise.all([producto ])

            .then(([producto]) => {

                return res.render('search-results', {
                    producto,
                    busqueda,
                })
            }) 
    },

    // El metodo detalle lleva a la pagina de producto
    detalle: (req, res) => {
        let id = req.params.id;

        let producto = db.Producto.findAll(
            {  
                where: [{
                id: id
            }
        ],
                include: [
                    {association:"userAdd"}
                 ]
            }
        )

        // Si se acaba de agregar un producto o editar, manda un valor (mensajeBack) a la vista para renderizar un mensaje
        let mensaje = req.query.mensaje;

        Promise.all([producto])

            .then(([producto]) => {
             //return res.send (producto)
        
                return res.render('product', {
                    producto,
                    mensaje
                })
            })


    },
        
}
   

module.exports = productController;