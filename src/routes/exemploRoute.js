const express = require('express');
const router = express.Router();
const controller = require('../controllers/exemploController')

router.get('/', controller.get);
router.get('/Route/', controller.getRoute);
router.get('/:Param1', controller.getParam);

module.exports = router;