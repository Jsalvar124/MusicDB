let db = require('../database/models')
const sequelize = db.sequelize;
const Op = db.Sequelize.Op; //sequalize con mayuscula

let albumsController = {
    list: async (req, res) => {
        try {
            const albums = await db.Album.findAll({include:{all:true}});
            
            res.status(200).json({
                meta: {
                    total: albums.length,
                    status: 200
                }, 
                data: albums
            })   
            // res.render('albumsList', { albums });

        } catch (error) {
            res.send(error);
        }

    }
}

module.exports = albumsController;
