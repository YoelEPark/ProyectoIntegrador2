module.exports = function (sequelize, dataTypes){
    //definir alias
    let alias = 'Comment'; //con este alias sequelize va a identificar internamente al archivo de modelo.

    // Describir las config de las columnas de la tabla
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comment:{
            type: dataTypes.TEXT,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        productId:{
            type: dataTypes.STRING,
        },
        userId:{
            type: dataTypes.STRING,
        },
       
    }
    
    let config = {
        table: 'comments',
        timestamps: true, // si la tabla no tiene los campos created_at y updated_at.
        underscored: false,// si los nombres de columnas tienen guion bajo en lugar de camelCase.

    }

    const Comment = sequelize.define(alias, cols , config);
    
    Comment.associate = function(models){
     Comment.belongsTo(models.Product,{
            as:'product',
            foreignKey: 'productId'
        })
        
        Comment.belongsTo(models.User, {
            as:"user",
            foreignKey:"userId"
        })
    
    }

    return Comment;
}