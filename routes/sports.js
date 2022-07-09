var express = require('express');
var router = express.Router();
const sportsController = require('../controllers/sportsController');

router.get('/', sportsController.readAll);
router.get('/:sportsId', sportsController.read);
router.post('/', sportsController.write);
router.delete('/:sportsId', sportsController.delete);

module.exports = router;