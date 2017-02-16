const userController = require('../controllers').user;
const homeRouter = require('./home');
// const users = require('./users');
const accountRouter = require('./account');

module.exports = (app) => {
    
  app.use('/', homeRouter);
  // app.use('/users', users);
  app.use('/', accountRouter);

};