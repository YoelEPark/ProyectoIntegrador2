module.exports = function (sequelize, dataTypes){
    //definir alias
    let alias = 'user'; //con este alias sequelize va a identificar internamente al archivo de modelo.

    // Describir las config de las columnas de la tabla
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        username:{
            type: dataTypes.STRING,
        },
        
        email:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        birthday:{
            type: dataTypes.STRING,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },

    }
    
    let config = {
        table: 'users',
        timestamps: false, // si la tabla no tiene los campos created_at y updated_at.
        underscored: false,// si los nombres de columnas tienen guion bajo en lugar de camelCase.

    }

    const user = sequelize.define(alias, cols , config);

    User.associate = function(models){
        User.hasMany(models.Product,{
            as:'products',
            foreignKey: 'productId'
        })
    }

    return user;
}