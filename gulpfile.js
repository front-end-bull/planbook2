var gulp = require('gulp'),
	del = require('del'),
	// cached = require('gulp-cached'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	// concat = require('gulp-concat'),
	// notify = require('gulp-notify'),
	// filter = require('gulp-filter'),
	// jshint = require('gulp-jshint'),
	// rev = require('gulp-rev'),
	// cssnano = require('gulp-cssnano'),
	minifyCss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin')
	// browserSync = require('browser-sync'),
	// fileinclude = require('gulp-file-include'),
	// autoprefixer = require('gulp-autoprefixer'),
	// revCollector = require('gulp-rev-collector')


gulp.task('css',function(){
	return gulp.src(['planbook_css/main.css'])
		.pipe(minifyCss())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('planbook_css'))
})

// gulp.task('css',function(){
// 	return gulp.src('public/static/css/planbook/*.css')
// 		.pipe(rename({suffix:'.min'}))
// 		.pipe(minifyCss())
// 		.pipe(rev())
//     	.pipe(gulp.dest('public/static/dist/css'))
//     	.pipe(rev.manifest())
// 		.pipe(gulp.dest('public/static/dist/rev'))
// })

// gulp.task('styleReload',['css'],function(){
// 	return gulp.src(['public/static/dist/css/**/*.css'])
// 		.pipe(cached('style'))
// 		.pipe(browserSync.reload({stream:true}))
// })

gulp.task('script',function(){
	return gulp.src(['planbook_js/main.js'])
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('planbook_js'))
})

// gulp.task('image',function(){
// 	return gulp.src('image/*.{jpg,jpeg,png,gif}')
// 		// .pipe(cached('image'))
// 		.pipe(imagemin({optimizationLevel:3,progressive:true,interlaced:true,multipass:true}))
// 		.pipe(gulp.dest('img'))
// })


gulp.task('clean',function(){
	return del(['planbook_js/main.min.js','planbook_css/main.min.css'])
})


gulp.task('build',['css','script'],function(){

})

gulp.task('default',['clean'],function(){
	gulp.start('build')
})

// gulp.task('watch',function(){
// 	browserSync.init({
// 		server:{
// 			baseDir:'public/static/dist'
// 		}
// 	})
// })

// gulp.watch('public/static/css/**/*.css',['styleReload'])

// gulp.watch('public/static/js/**/*.js',['script'])

// gulp.watch('public/static/img/**/*',['image'])

// gulp.watch('views/**/*.ejs',['html'])

// gulp.watch(['public/static/dist/**/*','!dist/css/**/*']).on('change',browserSync.reload)
