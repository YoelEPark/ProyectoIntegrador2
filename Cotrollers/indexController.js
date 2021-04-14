const indexController = {
    index: function(req, res){
        return res.send('index', { title: 'Express' })
    },

}

module.exports = indexController;