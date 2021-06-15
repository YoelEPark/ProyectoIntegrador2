const bcrypt = require('bcryptjs');
const db = require('../database/models');
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
        // Guardar un usuario en la db
        let user = {
           name : req.body.name,
           lastname: req.body.lastname,
           email: req.body.email,
           password: bcrypt.hashSync(req.body.password, 10), 
           userimg: req.file.filename
        }
       
       users.create(user)
       .then( user => {
        return res.redirect('/login')
       })
       .catch(e => {console.log(e)});

    }
}

module.exports = registerController;