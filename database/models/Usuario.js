module.exports = function (sequelize, dataTypes){
    //definir alias
    let alias = 'Usuario'; //con este alias sequelize va a identificar internamente al archivo de modelo.

    // Describir las config de las columnas de la tabla
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        apellido:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        telefono:{
            type: dataTypes.INTEGER,
        },
        fecha:{
            type: dataTypes.DATE,
        },

    }
    
    let config = {
        table: 'usuarios',
        timestamps: false, // si la tabla no tiene los campos created_at y updated_at.
        underscored: false,// si los nombres de columnas tienen guion bajo en lugar de camelCase.

    }

    const Usuario = sequelize.define(alias, cols , config);

    return Usuario;
}