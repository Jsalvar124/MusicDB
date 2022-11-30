var express = require('express');
var router = express.Router();

let albumsController = require('../controllers/albumsController')

/* GET home page. */
router.get('/', albumsController.list);

module.exports = router;
