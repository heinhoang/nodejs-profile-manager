const userController = require('../controllers').user;
const home = require('./home');
const users = require('./users');

module.exports = (app) => {
    
  app.use('/', home);
  app.use('/users', users);

};