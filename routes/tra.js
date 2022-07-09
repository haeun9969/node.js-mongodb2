var express = require('express');
var router = express.Router();
const traController = require('../controllers/traController');

router.get('/', traController.readAll);
router.get('/:traId', traController.read);
router.post('/', traController.write);
router.delete('/:traId', traController.delete);

module.exports = router;