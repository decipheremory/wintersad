'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var spawn = require('child_process').spawn;
var fs = require('fs');
var del = require('del');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var pngquant = require('imagemin-pngquant');
var replace = require('gulp-replace');
var runSeq = require('run-sequence');
var util = require('gulp-util');

// One build task to rule them all.
gulp.task('build', function(done) {
  global.buildMode = true;
  runSeq('clean', ['buildImgs', 'buildPrep', 'buildJs'], done);
});

// Execute any preparation steps before the build runs.
gulp.task('buildPrep', function() {
  // add the dist dir if it doesn't exist
  // doing it here rather than the "buildjs" script in package.json in order to keep it simple
  if (!fs.existsSync(global.paths.dist)) fs.mkdirSync(global.paths.dist);
});

// Build JS for distribution.
gulp.task('buildJs', function(done) {
  // execute script in package.json
  var child = spawn('npm', ['run', 'buildJs']);

  // print stdout to screen
  child.stdout.on('data', function(data) {
    process.stdout.write(data.toString());
  });

  // print stderr to screen
  child.stderr.on('data', function(data) {
    process.stdout.write(data.toString());
  });

  return child.on('close', function(code) {
    logMessage('Finished building JS.');
    done();
  });
});

// Build images for distribution.
gulp.task('buildImgs', function() {
  return gulp.src(global.paths.imgSrc)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(global.paths.imgDist));
});

// Combine all CSS (vendor and source) for distribution.
gulp.task('combineCss', function(done) {
  // If CSS files are imported in JS files then app.min.css will be generated during the buildjs gulp task.
  // Additional CSS must concatenate not overwrite app.min.css.
  fs.stat(global.paths.cssMin, function(err, stats) {
    if (stats && stats.isFile()) {
      fs.stat(global.paths.tempCss, function(err, stats) {
        if (stats.isFile()) {
          fs.readFile(global.paths.tempCss, 'utf8', function(err, data) {
            if (err) throw err;
            fs.appendFile(global.paths.cssMin, data, function(err) {
              if (err) throw err;
              del(global.paths.tempCss);
              logMessage('All CSS files have been successfully combined.');
              done();
            });
          });
        }
      });
    } else {
      fs.rename(global.paths.tempCss, global.paths.cssMin);
      done();
    }
  });
});

function logMessage(message) {
  util.log(
    util.colors.green(message)
  );
}
