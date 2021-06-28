const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
let products = require('../data/librosData');
let users = require('../data/usersData');
const Product = require('../database/models/Product');

const op = db.Sequelize.Op;



const productController = {
    product: function(req, res){
        db.Product.findAll()
        .then(data =>{
            return res.render('product', {title: 'product', products: data})
        })
        .catch(error => {
            console.log(error)
        })
    },
    add: function(req, res){
        if (req.session.user == undefined){
            return res.redirect('/users/login')
        }else {
            db.Product.findAll()
            .then(data =>{
                return res.render('product-add', {title: "agregar productos", products: data})
            })
            .catch(error =>{
                console.log(error)
            })
        }
    },
    store: function(req, res){ //guardar libros

        let errors = {}
        
        if (req.body.productName == ""){
            errors.message = "El nombre es obligatorio";
            res.locals.errors = errors;
            return res.render('product-add', {title: 'Agragar productos'})
        
        }else if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
            errors.message = "debe subir una imagen en formato jpg, jpeg o png";
            res.locals.errors = errors;
            return res.render('register', {title: 'agregar productos'})
        
        }else {
            let products = {
                userId: req.session.user.id,
                productName: data.productName,
                img: req.file.filename,
                productDescription: data.productDescription,
            };
            
            db.Product.create(products)
            .then((productoCreado)=>{
                return res.redirect(`/users/${req.session.user.id}`);
            })
            .catch(error =>{
                console.log(error);
            })
        }

    },
    detalle: function(req, res){
        db.Product.findByPk(req.params.id,{
            include:[
                //relacion comentario producto.
                {
                    association: 'comments',
                    include: { association: 'user'}
                },
                // relacion producto usuario 
                { association: 'user'}],
                order: [['comments', 'id', 'DESC']]
        })

                .then(data =>{
                    return res.render('product', {product: data})
                })
                .catch(error =>{
                    console.log(error);
                })
    },
   
    editProduct: function(req, res){
        let productId = req.params.id;

        db.Product.findByPk(productId)
        .then(function(product){
            if(product.userId != req.session.user.id){
                return res.redirect(`/users/${req.session.user.id}`)
            }
            return res.render('product-edit', {editProduct: product})
        })
        .catch( e => {console.log(e)})
    },
    updateProduct: function(req, res){
        let id = req.params.id;
        db.Product.findByPk(id)
        .then( function(product){

            let data = req.body;

            //actualizar producto

            let productToUpdate = {
                id: req.params.id,
                userId: req.session.user.id,
                productName: data.productName,
                img: req.file.filename,
                productDescription: data.productDescription
            }

            if(req.file == undefined){
                productToUpdate.img = req.session.product.img;
            }else {
                productToUpdate.img = req.file.filename;
            }
            db.Product.update(productToUpdate,{
                where: {
                    id: req.params.id
                }
            })
            .then(function(){
                //actualizar los datos del product y redirecciona al detalle
                let id = req.params.id;
                return res.redirect(`/product/id/${id}`)
            })
            .catch( e => {console.log(e)})
        })
        .catch (e => {console.log(e)})
    },
    addComment:function(req,res){
        let data = req.body;

        let comentario = {
            productId: req.params.id ,
            userId:req.session.user.id,
            textoComentario: data.textoComentario,
        }

        db.Coment.create(comentario)
        .then(function(comentarioCreado){
            // Revisar el nuemro del Id en la ruta
            
            return res.redirect(`/product/id/${req.params.id}`)
        })
        .catch(function(error){
            console.log(error)
        })
       
    },

    destroy: function(req, res){
        let productoABorrar = req.params.id;

        Product.findByPk(productoABorrar)
        .then(data =>{
            if(req.session.user.id == data.userId){
                Comment.destroy({
                    where: [
                        { productId: productoABorrar},
                    ]
                })
                .then(function(){
                    Product.destroy({
                        where: [
                            {id: productoABorrar},
                        ],
                        include: [{association: 'comment'}]
                    })// destroy
                })
                .then(function(){
                    return res.redirect('/')
                })
                .catch(error =>{
                    console.log(error)
                })
            }else{
                return res.redirect('/users/login')
            }
        })
        .catch(error =>{
            console.log(error)
        })
    },

    destroyComment: function(req,res){
        Comment.findByPk(req.params.id)
        .then(data =>{
            Comment.destroy({
                where: [
                    {id: req.params.id}
                ]
            }) 
            .then(function(){
                return res.redirect(`/products/id/${data.productId}`)
            })
            .catch(error =>{
                console.log(error)
            }) 
        }) 
        
        .catch(error =>{
            console.log(error)
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
      let infoABuscar = req.query.search; // obtengo la info de la querystring

      db.Product.findAll({
         
            
          where: {
            [op.or]: [{
                    productName: {
                        [op.like]: '%' + infoABuscar + '%'
                    }
                }]
                
        },
        include:[{
            association: 'user'
        }],

    })
    .then(data => {
        // 
        // return res.send(data)
        if (data == null || data == [] || data.length == 0) {
            console.log('No hay resultados');
            return res.render('search-results', {
                title: 'Resultados',
                products: data,
                result: infoABuscar,
                respuesta: 'No se encontraron resultados para '
            });

        }
        return res.render('search-results', {
            title: 'Resultados',
            products: data,
            result: infoABuscar,
            respuesta: ''
        });
    })
    .catch(error => {
        console.log(error);
    })
    },

   
        
}
   

module.exports = productController;