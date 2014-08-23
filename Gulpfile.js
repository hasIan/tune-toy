var browserify = require('gulp-browserify');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var rename     = require('gulp-rename');
var del        = require('del');

gulp.task('default', ['browserify'], function() {
  return gulp.src(['www/**/*.html', 'www/img'])
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify', function() {
  var production = gutil.env.type === 'production';

  gulp.src(['www/js/main.js'], {read: false})

    // Browserify, and add source maps if this isn't a production build
    .pipe(browserify({
      debug: !production
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('clean', function(cb) {
    return del(['dist'], cb);
});
