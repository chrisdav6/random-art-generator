const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile sass into CSS
function css(cb) {
  return gulp.src(['src/scss/main.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
  cb();
};

// Watch SCSS folder for changes
function watchCss(cb) {
  gulp.watch("./src/scss/*.scss", css);
  cb();
};

gulp.task("css", css);
gulp.task("watchCss", watchCss);

gulp.task('default', gulp.series(css));
gulp.task("watch", gulp.series(watchCss));