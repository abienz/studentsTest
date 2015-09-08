var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var nib = require('nib');
var jade = require('gulp-jade');

gulp.task('compress', function () {
  gulp.src('src/stylus/*.styl')
    .pipe(stylus({
      use: nib(),
      compress: true
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('templates', function() {
	gulp.src('src/jade/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
  gulp.watch('src/stylus/*.styl', ['compress']);
  gulp.watch('src/jade/*.jade', ['templates']);
});

gulp.task('default', ['watch']);