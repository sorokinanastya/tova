const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
function compileSass() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}


function serve() {
  browserSync.init({
    server: './',
    tunnel: true, 
    
  });
  gulp.watch('scss/**/*.scss', compileSass);
  gulp.watch('index2.html').on('change', browserSync.reload);
}

gulp.task('default', gulp.series(compileSass, serve));