const { promiseImpl } = require('ejs');
let db = require('../database/models')
const sequelize = db.sequelize;
const Op = db.Sequelize.Op; //sequalize con mayuscula

let songsControllerApi = {
    
    sqlSearch: 'select canciones.id as "id", canciones.nombre as "titulo", milisegundos, titulo as "album", artistas.nombre as "artista" from canciones inner join albumes on id_album=albumes.id inner join artistas on artistas.id=id_artista',
    
    list: async (req, res) => {
        let limit=" LIMIT 100"
        let offset=" OFFSET 0"
        req.query && req.query.limit? limit=` LIMIT ${req.query.limit}`:""
        req.query && req.query.offset? offset=` OFFSET ${req.query.offset}`:""
        console.log(limit)
        console.log(offset)

        try{
        const songs = await db.sequelize.query( songsControllerApi.sqlSearch, {type: sequelize.QueryTypes.SELECT})  
        res.status(200).json({
            meta: {
                total: songs.length,
                status: 200
            }, 
            data: songs
        })   
        // res.render('songsList', { songs });
        } catch (error) {
            res.send(error);
        }

    },
    searchByKeyWord: async (req, res) => {
        const keyWord=req.query.keyWord
        try {
            
            const [songResults, albumResults]= await Promise.all([

                db.Song.findAll(  //find all songs that match the keyword
                    { 
                    where:{
                        [Op.or]:[
                            {nombre: {[Op.like]:`%${keyWord}%`}},
                        ]
                    },
                    include: { all: true , nested: true }
                    
                }),

                db.Album.findAll(  //find all albumns that match the keyword
                    { 
                    where:{
                        [Op.or]:[
                            {titulo: {[Op.like]:`%${keyWord}%`}},
                        ]
                    },
                    include: { all: true , nested: true }
                    
                } )
    
            ]);

            res.status(200).json({
                meta:{
                    status:200,
                    totalSongs:songResults.length,
                    totalAlbums:albumResults.length
                
                },
                data: {
                    songResults: songResults,
                    albumResults: albumResults,
                    keyWord: keyWord
                }
            })
            // res.render('searchResult', { songResults,albumResults,keyWord });
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = songsControllerApi;
