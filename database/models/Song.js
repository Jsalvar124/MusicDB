module.exports = function(sequelize, dataTypes){
	
	let alias="Song"  // apodo con el que se usará la tabla en el código

	let cols={
		id:{
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nombre:{
			type: dataTypes.STRING
		},
		id_album:{
			type: dataTypes.INTEGER
		},
		id_genero:{
			type: dataTypes.INTEGER
		},
		compositor:{
			type: dataTypes.STRING
		},
		milisegundos:{
			type: dataTypes.INTEGER
		}

	};

	let config={
		timestamps: false,
		tableName: "canciones" //nombre de la tabla en la base de datos
	}


	let Song = sequelize.define(alias,cols,config);

	Song.associate = function(models){
        Song.belongsTo(models.Album, {
            as: "album",
            foreignKey: "id_album"
        }),
		Song.belongsTo(models.Genre, {
            as: "genero",
            foreignKey: "id_genero"
        })
    }
	
	return Song;
}