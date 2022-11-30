module.exports = function(sequelize, dataTypes){
	
	let alias="Artist" 

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
		tableName: "artistas" 
	};


	let Artist = sequelize.define(alias,cols,config);

    Artist.associate = function (models) {
		Artist.hasMany(models.Album, {
			as: "albums",
			foreignKey: "id_artista"
		})
    }
        

    return Artist;
}