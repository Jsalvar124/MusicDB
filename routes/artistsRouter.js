var express = require('express');
var router = express.Router();

let artistsController = require('../controllers/artistsController')

/* GET home page. */
router.get('/', artistsController.list);

module.exports = router;
