var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var bs = require('browser-sync').create();

// the real stuff
gulp.task('default', ['browser-sync'], function () {
    gulp.watch('./views/**/*.pug', bs.reload);
    gulp.watch('./public/**/*.js', bs.reload);
    gulp.watch('./public/**/*.css', bs.reload);
    gulp.watch(['./routes/**/*.js', './app.js', './bin/www'], ['bs-delay']);
});

// give nodemon time to restart
gulp.task('bs-delay', function () {
    setTimeout(function () {
        bs.reload({ stream: false });
    }, 1000);
});

// our browser-sync config + nodemon chain
gulp.task('browser-sync', ['nodemon'], function () {
    bs.init(null, {
        port: 4000, // browser-sync run on another port
        // proxy listen on your existing server (here is expressJS server)
        proxy: 'localhost:3000'
    });
});

// our gulp-nodemon task
gulp.task('nodemon', function (cb) {
    var started = false;
    return nodemon({
        script: './bin/www',
        ext: 'js',
        ignore: ['public/**/*.js'],
        env: {
            'NODE_ENV': 'development',
            'DEBUG': 'nodejs-api-profile-manager:*'
        }
    }).on('start', function () {
        //avoid nodemon being started multiple times
        if (!started) {
            cb();
            started = true;
        }
        bs.reload;
    })
        .on('crash', function () {
            // console.log('nodemon.crash');
        })
        .on('restart', function () {
            // console.log('nodemon.restart');
        })
        .once('quit', function () {
            // handle ctrl+c without a big weep
            process.exit();
        });
});