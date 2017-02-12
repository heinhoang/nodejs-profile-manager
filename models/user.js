var mongoose = require('mongoose');
var validator = require('validator');

/**
 * schema declaration
 */ 
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

/**
 * hash password before save
 */ 
userSchema.pre('save', (next) => {
    // check if password is modified by user?
    if(!this.isModified('password')) {
        return next();
    }
    this.password = User.encryptPassword(this.password);
    next();
});

/**
 * Validate input
*/
User.schema.path('email').validate(email => {
    return validator.isEmail(email);
});
User.schema.path('password').validate(password => {
    return validator.isLength(password, 6);
});

var User = mongoose.model('User', userSchema);
module.exports = User;