var express = require('express');
var router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', dataController.readAll);
router.get('/:dataId', dataController.read);
router.post('/', dataController.write);
router.delete('/:dataId', dataController.delete);

module.exports = router;