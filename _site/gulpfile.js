var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var sass        = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var imagemin    = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');


function _errorLog(error){
  console.error.bind(error);
  $this.emit('end');
}


gulp.task('imagemin', function(){
  gulp.src('assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//compile sass and export as compressed css
gulp.task('sass', function(){
  return sass('assets/css/sass/*.sass', {
    style: 'compressed'})
      .on('error', _errorLog)
      .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
      .pipe(gulp.dest('assets/css'))
      .pipe(browserSync.stream());
});

//compress js and export to min folder
gulp.task('scripts', function(){
  gulp.src('assets/js/main.js')
    .on('error', _errorLog)
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/min'))
    .pipe(browserSync.stream());
});

//watch files for changes
gulp.task('watch', function(){
  gulp.watch('assets/js/main.js',['scripts']);
  gulp.watch('assets/css/sass/*.sass',['sass']);
});

gulp.task('default', ['scripts', 'watch', 'sass', 'browser-sync', 'imagemin']);
