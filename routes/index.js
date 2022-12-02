var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Music Database' });

  console.log('el modo es '+ req.session.visitas)

});

router.get('/session', (req,res)=>{

  if (req.session.visitas==undefined){
    req.session.visitas=0
  } 

  req.session.visitas++

  console.log('el modo es '+ req.session.visitas)
  res.send("la sessión es " +req.session.visitas)
})

module.exports = router;
