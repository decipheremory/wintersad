'use strict';

var gulp = require('gulp');

gulp.task('css', function() {
  return gulp
    .src(global.paths.cssSrc)
    .pipe(gulp.dest(global.paths.cssDist));
});
