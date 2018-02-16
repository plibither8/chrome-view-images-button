const autoprefix = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const gulp = require("gulp");
const stylus = require("gulp-stylus");
const surge = require("gulp-surge");
const uglify = require("gulp-uglify");

gulp.task('styl', function() {
	return gulp.src('src/styl/*.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(autoprefix({
		cascade: false
	}))
	.pipe(gulp.dest('dist/'));
})

gulp.task('js', function() {
	return gulp.src('src/js/*.js')
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/'))
})

gulp.task('default', ['styl', 'js'], function () {
	gulp.watch(['src/styl/**/*.styl', 'src/js/*.js'], ['styl', 'js']);
})