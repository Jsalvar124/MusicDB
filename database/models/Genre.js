module.exports = function(sequelize, dataTypes){
	
	let alias="Genre" 

	let cols={
		id:{
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nombre:{
			type: dataTypes.STRING
		},
	};

	let config={
		timestamps: false,
		tableName: "generos" 
	};


	let Genre = sequelize.define(alias,cols,config);

    Genre.associate = function (models) {
		Genre.hasMany(models.Song, {
			as: "songs",
			foreignKey: "id_genero"
		})
    }
        

    return Genre;
}