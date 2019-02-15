var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');

var Member = mongoose.model('Member');

router.post('/', function(req, res, next) {
  console.log(req.param('_id'));
  console.log(req.param('id'));
  console.log(req.param('name'));
  console.log(req.param('tel'));
  //update set id='aaa',pw='222' where _id=3
  Member.findOne({_id:req.param('_id')}).exec(function(err, doc) {
      if ( doc ) {
         doc.id = req.param('id');
         doc.name = req.param('name');
         doc.tel = req.param('tel');
         doc.save(function(err, product) {
           if (product) {
             console.log('Modify and Save : ', product);
             res.redirect('/list');
           }
         });
      }else{
        console.log('Modify Rejected : ', err);
        res.redirect('/update?_id='+req.param('_id'));
      }
   });


});

module.exports = router;
