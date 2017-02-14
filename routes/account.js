var express = require('express');
var userController = require('../controllers').user;
var router = express.Router();

router.get('/register', userController.getSignup);
router.post('/register', userController.postSignup);

module.exports = router;
