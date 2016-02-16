'use strict';

var gulp = require('gulp');
var gulpBabel = require('gulp-babel');
var runSeq = require('run-sequence');

gulp.task('compileModule', function() {
  runSeq('clean', ['compileLib', 'copySrc']);
});

gulp.task('compileLib', function() {
  return gulp
    .src(global.paths.src)
    .pipe(gulpBabel())
    .on('error', global.onError)
    .pipe(gulp.dest(global.paths.libOutput));
});

gulp.task('copySrc', function() {
  return gulp
    .src(global.paths.src)
    .pipe(gulp.dest(global.paths.srcOutput));
});
