const { promiseImpl } = require('ejs');
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

/*             const songResults = await db.Song.findAll( 
                { 
                where:{
                    [Op.or]:[
                        {nombre: {[Op.like]:`%${keyWord}%`}},
                    ]
                },
                include: { all: true , nested: true }
                
            } ); */

            res.render('searchResult', { songResults,albumResults,keyWord });
            //res.send({songResults: songResults,albumResults: albumResults,keyWord: keyWord})
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = songsController;
