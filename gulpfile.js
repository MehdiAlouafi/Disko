var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    prefix  = require('gulp-autoprefixer');

gulp.task('sass',function(){
  return gulp.src('_www/sass/*.sass')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compact'}))
        .pipe(prefix({
          browsers: ['last 2 Chrome version','last 2 Firefox version', 'safari 5', 'ie 9', 'iOS 6', 'iOS 7']
        }))
        .pipe(gulp.dest('_www/'))
});

gulp.task('watch',function(){
  gulp.watch('_www/sass/*.sass',['sass'])
})

gulp.task('default',['sass','watch']);
