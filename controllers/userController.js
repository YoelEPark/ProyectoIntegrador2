const userController = {
    user: function(req, res){
        return res.render('profile')
    },
    edit: function(req, res){
        return res.render('profile-edit')
    },
    login: function(req,res){
        return res.render('login')
    },
    register: function(req, res){
        return res.render('register')
    },


}

module.exports = userController;