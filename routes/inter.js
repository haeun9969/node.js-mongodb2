var express = require('express');
var router = express.Router();
const interController = require('../controllers/interController');

router.get('/', interController.readAll);
router.get('/:interId', interController.read);
router.post('/', interController.write);
router.delete('/:interId', interController.delete);

module.exports = router;