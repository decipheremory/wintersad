'use strict';

/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in the 'gulpTasks' folder. Any files in that directory get
 * automatically required below.
 *
 * To add a new task, simply add a new task file in that directory.
 */

var gulp = require('gulp');
var requireDir = require('require-dir');

// Specify paths & globbing patterns for tasks.
global.paths = {

  // HTML sources.
  html: './app/*.html',
  // App sources.
  appSrc: './app/src/**/*.js',
  // Source files only.
  src: './app/src/lib/**/*.js',
  // Src output.
  srcOutput: './src',
  // Lib sources.
  libSrc: './app/src/lib/**/*.js',
  // Lib output.
  libOutput: './lib',
  // Assets sources
  assetSrc: './app/src/lib/assets/**/*.*',
  // Assets output
  assetOutput: './src',

  // Fonts
  fontsSrc: './app/src/lib/assets/fonts/**/*',
  fontsDist: './dist/lib/fonts',
  // Images
  imgSrc: './app/src/lib/assets/img/*',
  imgDist: './dist/lib/img',
  // Icons
  iconsSrc: './app/src/lib/assets/icons/**/*',
  iconsDist: './dist/lib/icons',
  // CSS
  cssSrc: './app/src/lib/assets/css/**/*',
  cssDist: './dist/lib/css',
  // Distribution folder.
  dist: './dist'
};

// Require all tasks in the 'gulpTasks' folder.
requireDir('./gulpTasks', { recurse: false });

// Default task; start local server.
gulp.task('default', ['serve']);

global.onError = function (error) {
  console.log(error.toString());
  this.emit('end');
}
