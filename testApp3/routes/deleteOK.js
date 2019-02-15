var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');
var Member = mongoose.model('Member');

router.get('/', function(req, res, next) {
  console.log(req.param('_id'));
  Member.findOne({_id:req.param('_id')}).exec(function(err, doc) {
      if ( doc ) {
         doc._id = req.param('_id');
         doc.remove(function(err, product) {
           if (product) {
             console.log('Find and remove : ', product);
             res.redirect('/list');
           }
         });
      }else{
        console.log('Remove Rejected : ', err);
        res.redirect('/list');
      }
   });


});

module.exports = router;
