module.exports = function (sequelize, dataTypes){
    //definir alias
    let alias = 'Producto'; //con este alias sequelize va a identificar internamente al archivo de modelo.

    // Describir las config de las columnas de la tabla
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        img:{
            type: dataTypes.STRING,
        },
        nombreProducto:{
            type: dataTypes.STRING,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        usuarioId:{
            type: dataTypes.INTEGER,
        },
        

    }
    
    let config = {
        table: 'productos',
        timestamps: true, // si la tabla no tiene los campos created_at y updated_at.
        underscored: false,// si los nombres de columnas tienen guion bajo en lugar de camelCase.

    }

    const Producto = sequelize.define(alias, cols , config);

    return Producto;
}