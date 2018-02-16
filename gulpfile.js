const concat = require("gulp-concat");
const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task('js', function() {
	return gulp.src('src/js/*.js')
	.pipe(concat('content.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/'))
})

gulp.task('default', ['js'], function () {
	gulp.watch(['src/js/*.js'], ['js']);
})