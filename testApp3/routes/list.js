var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');




var Member = mongoose.model('Member');

router.get('/', function(req, res, next) {

  Member.find({}, function(err, vos) {
       console.log(JSON.stringify(vos));
       res.render('list', { title: 'list' ,datas:JSON.stringify(vos)});
  });


});

module.exports = router;
