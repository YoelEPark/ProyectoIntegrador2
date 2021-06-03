module.exports = function (sequelize, dataTypes){
    //definir alias
    let alias = 'product'; //con este alias sequelize va a identificar internamente al archivo de modelo.

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
        productName:{
            type: dataTypes.STRING,
        },
        productDescription:{
            type: dataTypes.STRING,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
        

    }
    
    let config = {
        table: 'products',
        timestamps: true, // si la tabla no tiene los campos created_at y updated_at.
        underscored: false,// si los nombres de columnas tienen guion bajo en lugar de camelCase.

    }

    const product = sequelize.define(alias, cols , config);

    return product;
}