'use strict';

var gulp = require('gulp');
var runSeq = require('run-sequence');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var path = require('path');
var util = require('gulp-util');

var _browserSync;

var serverOptions = {
  open: false,
  ui: false,
  notify: false,
  ghostMode: false,
  port: process.env.PORT || 9000,
  server: {
    baseDir: global.paths.dist,
    routes: {
      '/system.config.js': './app/system.config.js',
      '/jspm_packages': './app/jspm_packages'
    }
  },
  middleware: [
    historyApiFallback({
      historyApiFallback: true
    })
  ]
};

// Start local dev server.
// gulp.task('serve', function(done) {
//   runSeq('clean', ['html', 'js'], 'watch', function() {
//     _browserSync = browserSync.create('Dev Server');
//     return _browserSync.init(serverOptions, done);
//   });
// });

gulp.task('serve', function(done) {
  global.buildMode = false;

  var sequence = ['buildImgs', 'html', 'fonts', 'copyFontsFromJspmModules', 'icons', 'js', 'css'];
  runSeq('clean', sequence, 'watch', function() {
    _browserSync = browserSync.create('Dev Server');
    return _browserSync.init(serverOptions, done);
  });
});


gulp.task('browserSync-reload', function(done) {
  _browserSync.reload();
  done();
});

// Watch for changes.
gulp.task('watch', function() {
  gulp
    .watch(global.paths.appSrc, function() {
      runSeq(['lintjs', 'js'], 'browserSync-reload');
    })
    .on('change', onChange);

  gulp
    .watch([global.paths.html], function() {
      runSeq('html', 'browserSync-reload');
    })
    .on('change', onChange);
});

function onChange(event) {
  util.log(
    util.colors.green('File ' + event.type + ': ') +
    util.colors.magenta(path.basename(event.path))
  );
}
