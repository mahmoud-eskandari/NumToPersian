var gulp = require('gulp');
var minify = require('gulp-minify');
var babel = require('gulp-babel');
gulp.task('default', function () {
    return gulp.src('src/num2persian.js')
        .pipe(babel())
        .pipe(minify())
        .pipe(gulp.dest('dist'));
});