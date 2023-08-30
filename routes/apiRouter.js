var express = require('express');
var router = express.Router();

let songsControllerApi = require('../Apis/songsControllerApi')
let albumsControllerApi = require('../Apis/albumsControllerApi')
let artistsControllerApi = require('../Apis/artistsControllerApi')

/* GET SONGS index in JSON. */
// http://localhost:3000/api/songs
router.get('/songs', songsControllerApi.list);

/* GET ALBUMS index in JSON. */
// http://localhost:3000/api/albums
router.get('/albums', albumsControllerApi.list);

/* GET ALBUMS index in JSON. */
// http://localhost:3000/api/artists
router.get('/artists', artistsControllerApi.list);

/* GET results from search by keyword JSON. */
// http://localhost:3000/api/results?keyWord=love
router.get('/results', songsControllerApi.searchByKeyWord);

module.exports = router;
