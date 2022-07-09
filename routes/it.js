var express = require('express');
var router = express.Router();
const itController = require('../controllers/itController');

router.get('/', itController.readAll);
router.get('/:itId', itController.read);
router.post('/', itController.write);
router.delete('/:itId', itController.delete);

module.exports = router;