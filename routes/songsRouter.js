var express = require('express');
var router = express.Router();

let songsController = require('../controllers/songsController')

/* GET songs index. */
router.get('/', songsController.list);

/* GET Search song. */
router.get('/results', songsController.searchByKeyWord);

module.exports = router;
