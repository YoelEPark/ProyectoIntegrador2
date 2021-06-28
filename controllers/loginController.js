const bcrypt = require('bcryptjs');
const db = require('../database/models');

const op = db.Sequelize.Op;

let loginController = {
    
    index: function(req, res){
        if(req.session.user != undefined ){
            return res.redirect('/')
        } else {  
            return res.render('login', { title: 'Ingresá' })
        }
    },

    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( user => {
           
            let errors = {};

            // ¿Está el mail en la base de datos?
            if (user == null){
                errors.message = 'El email no existe'
                res.locals.errors = errors
                return res.render('login', {title: 'Login'});
            } else if (bcrypt.compareSync(req.body.password, user.password) == false) {
                errors.message= 'La contraseña es incorrecta'
                res.locals.errors =errors
                return res.render('login', {title: 'Login'})
            } else {
                req.session.user = user;
                
                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
                }
           
                // Si tildó recordame => creamos la cookie.
                return res.redirect('/');
            } 
        })

        .catch( e => {console.log(e)})

    },
    logout: function(req,res){
        //Destruir la sessión
        req.session.destroy();

        //Destruir la coockie
         res.clearCookie('userId');
        
        //redireccionar a home
        return res.redirect('/')
    }
    
}

module.exports = loginController;