module.exports = function (sequelize, dataTypes){
    //definir alias
    let alias = 'Comentario'; //con este alias sequelize va a identificar internamente al archivo de modelo.

    // Describir las config de las columnas de la tabla
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario:{
            type: dataTypes.TEXT,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        productoId:{
            type: dataTypes.STRING,
        },
        usuarioId:{
            type: dataTypes.STRING,
        },
       
    }
    
    let config = {
        table: 'comentarios',
        timestamps: true, // si la tabla no tiene los campos created_at y updated_at.
        underscored: false,// si los nombres de columnas tienen guion bajo en lugar de camelCase.

    }

    const Comentarios = sequelize.define(alias, cols , config);

    return Comentarios;
}