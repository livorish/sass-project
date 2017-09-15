const gulp = require('gulp'),
    sass = require('gulp-sass');
gulp.task('styles', () => {
    return gulp.src('sass/styles.scss')
    .on('error', sass.logError)
    .pipe(sass())
    .pipe(gulp.dest('./css'));
}); 
gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', ['styles']);
});
gulp.task('default', ['styles']);