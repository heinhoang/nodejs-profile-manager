var express = require('express');
const passport = require('passport');
var router = express.Router();
var userController = require('../controllers').user;

/**
 * Local Authentication
 */ 

// register
router.get('/register', userController.getSignup);
router.post('/register', userController.postSignup);

// login
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);

// logout
router.get('/logout', userController.getLogout);

/**
 * OAUTH Authentication
*/
router.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});

module.exports = router;
