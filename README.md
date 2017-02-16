# Nodejs Api Profile Manager
App for user signning & registering. We will add more features to help manage user account in the future.

## Demo 
[heroku demo](http://nodejs-api-profile-manager.herokuapp.com)

## Requirements
- `NodeJS/ExpressJS` for backend
- `Pug` for frontend templating
- `MongoDB/MongoLab` for database storage
- Use `gulp, nodemon, browser-sync` to automate development proccess

## Usage
- run `gulp` to develop (or you can run `npm start` but this will not take advantage of `nodemon, browser-sync` to automate restarting webapp)

## Database
- First change database uri in `.env` file
- Start mongo and create database like this:
```shell
$ mongod
$ mongo
$ shows db
$ use profile_manager
```
- For deploying on heroku:
```shell
$ heroku addons:add mongolab
```
- and then and change MONGOLAB_URI in .env file
