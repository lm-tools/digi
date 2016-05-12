var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('css', function () {
  return gulp.src('assets/stylesheets/*.scss')
    .pipe(
      sass({
        includePaths: [
          'src/assets/stylesheets',
          'node_modules/govuk_frontend_toolkit/stylesheets'
        ],
        errLogToConsole: true
      }))
    .pipe(gulp.dest('dist/public/stylesheets/'));
});
