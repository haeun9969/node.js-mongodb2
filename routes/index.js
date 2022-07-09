var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/data', require('./data')); //정치
router.use('/it', require('./it')); //IT
router.use('/eco', require('./eco')); //경제
router.use('/inter', require('./inter')); //연예
router.use('/sports', require('./sports')); //스포츠
router.use('/tra', require('./tra')); //문화
router.use('/society', require('./society')); //사회

module.exports = router;
