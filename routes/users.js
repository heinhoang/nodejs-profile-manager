var express = require('express');
var userController = require('../controllers').user;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/account/register', userController.getSignup);
router.post('/account/register', userController.postSignup);

// router.get('/users/login', userController.showLoginForm);
// router.post('/users/login', userController.createSession);

module.exports = router;
