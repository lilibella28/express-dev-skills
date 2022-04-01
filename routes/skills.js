var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills');

/* GET users listing. */

router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:id', skillController.show);
router.post('/', skillController.create);
router.delete('/:id', skillController.delete)

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
