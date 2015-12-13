var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var sass        = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var imagemin    = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var cp = require('child_process');


var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

function _errorLog(error){
  console.error.bind(error);
  $this.emit('end');
}


gulp.task('imagemin', function(){
  gulp.src('assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/'));
});
/*
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
*/
//compile sass and export as compressed css
gulp.task('sass', function(){
  return sass('assets/css/sass/main.sass', {
    style: 'compressed'})
      .on('error', _errorLog)
      .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
      .pipe(gulp.dest('_site/assets/css'))
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
  gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['scripts', 'watch', 'sass', 'browser-sync', 'imagemin']);
