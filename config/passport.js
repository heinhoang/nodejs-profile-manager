var passport = require('passport');
var LocalStrategy = require('passport-local').LocalStrategy;
var User = require('mongoose').model('User');

passport.serializeUser((user, done) => {
    // we tell passport that when we serialize a user, we only need that user's id
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done);
});

// We tell passport how to authenticate a user locally
function authFail(done) {
    done(null, false, {message: 'incorrect email/password combination'});
}

passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({
        email: email,
    }, (err, done) => {
        if(err) return done(err);
        if(!user) {
            return authFail(done);
        }
        if(!user.validPassword(password)) {
            return authFail(done);
        }
        return done(null, user);
    });
}));