var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var imageop = require('gulp-image-optimization');

// JS
gulp.task('uglify', function() {
  return gulp.src('assets/js/script.js')
    .pipe(uglify())
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('assets/js'));
});


gulp.task('images', function(cb) {
    gulp.src(['assets/img/*.png','assets/img/*.jpg','assets/img/*.gif','assets/img/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('assets/img')).on('end', cb).on('error', cb);
});
