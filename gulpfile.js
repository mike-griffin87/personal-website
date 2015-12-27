var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var imagemin     = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var cp           = require('child_process');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');

var jekyll = (process.platform === "win32" ? "jekyll.bat" : "jekyll");

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
    .on('close', done)
    .on('error', errorAlert);
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('imagemin', function(){
  return gulp.src('assets/img/*')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/'));
});

// compile sass and export as compressed css
gulp.task('sass', function(){
  return gulp.src('assets/css/sass/main.sass')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

// compress js and export to min folder
gulp.task('js', function(){
  return gulp.src('assets/js/*.js')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/min'));
});

gulp.task('serve', ['js', 'sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });

  gulp.watch('assets/js/main.js', ['js']);
  gulp.watch(['assets/css/sass/*.sass', 'assets/css/sass/*.scss'], ['sass']);
  gulp.watch(['*.html', '_layouts/*.html', '_posts/*', 'assets/js/min/*.js'], ['jekyll-rebuild']);
});

gulp.task('default', ['serve']);

function errorAlert(error){
  notify.onError({title: "Gulp Error", message: "Beep beep beep, stuffs going down. Check the console.", sound: true})(error); //Error Notification
  console.log(error.toString()); //Prints Error to Console
  this.emit('end'); //End function
}
