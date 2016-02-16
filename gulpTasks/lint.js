'use strict';

var gulp = require('gulp');
var cache = require('gulp-cached');
var eslint = require('gulp-eslint');

// Lint JS.
gulp.task('lintjs', function () {
  return gulp.src(global.paths.appSrc)
    .pipe(cache('lintjs'))
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint', ['lintjs']);
