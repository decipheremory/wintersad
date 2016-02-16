'use strict';

var gulp = require('gulp');
var gulpBabel = require('gulp-babel');
var babel = require('babel-core');
var assign = require('object-assign');

gulp.task('js', function() {
  var compilerOptions = assign({}, babel.compilerOptions, {modules: 'system'});

  return gulp
    .src(global.paths.appSrc)
    .pipe(gulpBabel(compilerOptions))
    .on('error', global.onError)
    .pipe(gulp.dest(global.paths.dist));
});
