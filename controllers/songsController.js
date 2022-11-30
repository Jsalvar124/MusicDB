let db = require('../database/models')
const sequelize = db.sequelize;
const Op = db.Sequelize.Op; //sequalize con mayuscula

let songsController = {
    sqlSearch: 'select canciones.nombre as "titulo", milisegundos, titulo as "album", artistas.nombre as "artista" from canciones inner join albumes on id_album=albumes.id inner join artistas on artistas.id=id_artista',
    list: async (req, res) => {
        try{
        const songs = await db.sequelize.query(songsController.sqlSearch, {type: sequelize.QueryTypes.SELECT})  
        //res.json(songs)
        res.render('songsList', { songs });
        } catch (error) {
            res.send(error);
        }

    },
    searchByKeyWord: async (req, res) => {
        //const keyWord=req.query
        const keyWord=req.query.keyWord
        try {
            const results = await db.Song.findAll( 
                { 
                where:{
                    [Op.or]:[
                        {nombre: {[Op.like]:`%${keyWord}%`}},
                        {id_album: 2}  // album.titulo: like %keyWord% album.artist.nombre like %keyWord%
                    ]
                },
                include: { all: true , nested: true }
                
            } )
            //res.render('searchResult', { results, keyWord });
            res.send(results)
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = songsController;
