var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');




var Member = mongoose.model('Member');

router.get('/', function(req, res, next) {

  Member.find({_id:req.param("_id")}, function(err, vos) {
       console.log(vos[0]);
       let vo = vos[0];
       console.log(vo._id);
       console.log(vo.id);
       console.log(vo.name);
       console.log(vo.tel);
       res.render('update', { title: 'update' ,vo:JSON.stringify(vos[0])});
  });

  // // 콜백을 이용한 검색
  // Member.find({age:{$gt:33}}, function(err, vos) {
  //    console.log(vos);
  // });
  //
  // // 쿼리 객체 - exec를 이용하는 방법
  // Member.findOne({_id:'admin'}).exec(function(err, vos) {
  //    console.log(vos);
  // });
  //
  // Member.where('age').gt(33).exec(function(err, vos) {
  //    console.log('age > 33 : ', vos);
  // });


});

module.exports = router;
