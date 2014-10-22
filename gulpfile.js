var gulp = require('gulp')
, less = require('gulp-less')
, jade = require('gulp-jade')
, minifyCSS = require('gulp-minify-css')
, rename = require("gulp-rename")
, gutil = require('gulp-util')
, coffee = require('gulp-coffee')
, path = './assets/';

gulp.task('less', function(){
	gulp.src(path + 'css/*.less')
		.pipe(less())
		.on('error',function(e){
			return console.log(e);
		})
		.pipe(gulp.dest(path + 'css/dist'))
});

gulp.task('minify-css', function() {
  gulp.src([path + 'css/dist/*.css','!' + path+ 'css/dist/*.min.css'])
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(rename({
    	suffix: ".min",
    	extname: ".css"
    }))
    .pipe(gulp.dest(path + 'css/dist'))
});

gulp.task('jade', function(){
	gulp.src(path+'*.jade')
		.pipe(jade()).on('error', gutil.log)
		.pipe(gulp.dest(path))
});

gulp.task('copy-fonts', function(){
	gulp.src(path+'components/fontawesome/fonts/**/*')
		.pipe(gulp.dest(path+'css/fonts'))
});

gulp.task('coffee', function(){
	gulp.src(path + 'js/**/*.coffee')
		.pipe(coffee()).on('error', gutil.log)
		.pipe(gulp.dest(path + 'js/dist'))
});

gulp.watch([path+'css/**/*.less', path+'*.jade', path+'js/**/*.coffee'],['less', 'coffee',  'minify-css', 'jade']);

gulp.task('default', ['less', 'coffee', 'minify-css','jade']);
