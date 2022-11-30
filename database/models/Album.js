module.exports = function (sequelize, dataTypes) {

	let alias = "Album"  // apodo con el que se usará la tabla en el código

	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		titulo: {
			type: dataTypes.STRING
		},
		id_artista: {
			type: dataTypes.INTEGER
		}

	};

	let config = {
		timestamps: false,
		tableName: "albumes" //nombre de la tabla en la base de datos
	}


	let Album = sequelize.define(alias, cols, config);

	Album.associate = function (models) {
		Album.hasMany(models.Song, {
			as: "songs",
			foreignKey: "id_album"
		}),
		Album.belongsTo(models.Artist, {
			as: "artist",
			foreignKey: "id_artista"
		})

	}

	return Album;
}