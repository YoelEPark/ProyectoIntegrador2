const bcrypt = require('bcryptjs');
const db = require('../database/models'); //  //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op;
const users = db.User;

let registerController = {
    index: function(req, res){
        if(req.session.user != undefined)
            return res.redirect('/')
        //Mostrar el formulario de registro
        return res.render('register');
    },
    store: function(req, res){ 
        let creada = {}
        let errors = {}

        if (req.body.email == ""){
            errors.message = 'El mail es obligatorio'
            res.locals.errors = errors;
            return res.render('register', {title: 'Registrate'})
        }
        else if (req.body.password == ""){
            errors.message = "La contrase;a es obligatoria"
            res.locals.errors = errors;
            return res.render('register', {title: 'Registrate'})
        }
        else{
            db.User.findOne({
                where: [{
                    email: req.body.email
                }]
            })
                .then(user =>{
                    if(user !=null){
                        errors.message = "El mail ya esta registrado. Por favor elija otro"
                        res.locals.errors = errors;
                        return res.render('register', {title: 'Registrate'})
                    }else {
                        
                        let user = {
                            username: req.body.username,
                            birthday: req.body.email,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            img: req.file.filename
                        }
                        creada.message = 'Bienvenido! Tu cuenta fue creada con exito.'
                        res.locals.creada= creada

                        users.create(user)
                            .then(user => {
                                return res.redirect('/login')
                            })
                            .catch(e => {
                                console.log(e)
                            });
                    }
                })
                // guardar un usuario en la db
                .catch(error => {console.log(error)})
        }
       
    }
}

module.exports = registerController;