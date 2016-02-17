'use strict';

var gulp = require('gulp');
var gulpBabel = require('gulp-babel');
var runSeq = require('run-sequence');
var path = require('path');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

gulp.task('compileModule', function() {
  runSeq('clean', ['compileLib', 'copySrc', 'copyAssets']);
});

gulp.task('compileLib', function() {
  var pattern = /.\/lib\/img\/.*?([^\/]+)(png)/g;
  return gulp
    .src(global.paths.src)
    .pipe(replace(pattern, "/img/jspm/$1$2"))
    .pipe(gulp.dest(global.paths.libOutput))
    .pipe(gulpBabel())
    .on('error', global.onError)
    .pipe(gulp.dest(global.paths.libOutput));
});

gulp.task('copySrc', function() {
  return gulp
    .src(global.paths.src)
    .pipe(gulp.dest(global.paths.srcOutput));
});

gulp.task('copyAssets', function() {
  return gulp
    .src(global.paths.assetSrc)
    .pipe(gulp.dest(global.paths.libOutput));
});
