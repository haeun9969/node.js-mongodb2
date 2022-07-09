var express = require('express');
var router = express.Router();
const ecoController = require('../controllers/ecoController');

router.get('/', ecoController.readAll);
router.get('/:ecoId', ecoController.read);
router.post('/', ecoController.write);
router.delete('/:ecoId', ecoController.delete);

module.exports = router;