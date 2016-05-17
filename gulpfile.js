var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber');

gulp.task('sass',function(){
  return gulp.src('_www/sass/*.sass')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compact'}))
        .pipe(gulp.dest('./.'))
});

gulp.task('watch',function(){
  gulp.watch('_www/sass/*.sass',['sass'])
})

gulp.task('default',['sass','watch']);
