var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');

var memberSchema = mongoose.Schema({
  id: String,
  name: String,
  tel:String
}, {
    versionKey: false
});


var Member = mongoose.model('Member', memberSchema);


router.post('/', function(req, res, next) {

  console.log(req.param('id'));
  console.log(req.param('name'));
  console.log(req.param('tel'));
  var m = new Member({id:req.param('id'),name:req.param('name'),tel:req.param('tel')});
  m.save().then((product) =>{
     console.log('Save Resolved : ', product);
     res.redirect('/list');
  }, (err) =>{
     console.log('Save Rejected : ', err);
     res.redirect('/insert');
  });

});

module.exports = router;
