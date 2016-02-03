var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('default', ['build']);
gulp.task('build', ['app']);

gulp.task('app', function() {
   return browserify({
        entries: ['./js/app.js'],
        transform: [reactify],
        standalone: 'galacount'
   })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('static/'))
});
