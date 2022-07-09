var express = require('express');
var router = express.Router();
const societyController = require('../controllers/societyController');

router.get('/', societyController.readAll);
router.get('/:societyId', societyController.read);
router.post('/', societyController.write);
router.delete('/:societyId', societyController.delete);

module.exports = router;