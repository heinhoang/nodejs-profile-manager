const passport = require('passport');

const User = require('mongoose').model('User');

exports.getIndex = function (req, res, next) {
    res.render('index', { title: 'Home Page'});        
};