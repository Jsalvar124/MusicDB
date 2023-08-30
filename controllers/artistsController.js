let db = require('../database/models')
const sequelize = db.sequelize;
const Op = db.Sequelize.Op; //sequalize con mayuscula

let artistsController = {
    list: async (req, res) => {
        try {
            const artists = await db.Artist.findAll({ include: { all: true } });
            res.render('artistsList', { artists });
        } catch (error) {
            res.send(error);
        }

    }
}

module.exports = artistsController;
