"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rimraf = require('rimraf');
var config = {
  paths: {
    js: './src/js/**/*.js',
    css: './src/css/**/*.css',
    html: './src/partials/**/*.html'
  }
};
gulp.task('clean-js', function(cb) {
  rimraf('./public/js', cb);
});
gulp.task('clean-css', function(cb) {
  rimraf('./public/css', cb);
});
gulp.task('clean-html', function(cb) {
  rimraf('./public/partials', cb)
});
gulp.task('clean-index', function(cb) {
  rimraf('./public/index.html', cb)
});
gulp.task('js', ['clean-js'], function() {
  return gulp.src(config.paths.js)
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public/js'));
});
gulp.task('css', ['clean-css'], function() {
  return gulp.src(config.paths.css)
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./public/css'));
});
gulp.task('html', ['clean-html'], function() {
  return gulp.src(config.paths.html)
  .pipe(gulp.dest('./public/partials'));
});
gulp.task('index', ['clean-index'], function() {
  return gulp.src('./public/index.html')
  .pipe(gulp.dest('./public'));
});
gulp.task('watch', function() {
  gulp.watch(config.paths.sass, ['css']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.image, ['image']);
});
gulp.task('build', ['js', 'css', 'html']);
gulp.task('default', ['build', 'watch']);
