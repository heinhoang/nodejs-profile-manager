const userController = require('../controllers').user;
const home = require('./home');
// const users = require('./users');
const account = require('./account');

module.exports = (app) => {
    
  app.use('/', home);
  // app.use('/users', users);
  app.use('/account', account);

};