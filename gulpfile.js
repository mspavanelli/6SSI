var gulp = require('gulp');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');
var ghPagesDeploy = require('gulp-gh-pages');

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('buildImages', function() {
	gulp.src('img/*')
	.pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function() {
	return gulp.src('dist/**/*')
		.pipe(clean());
});

gulp.task('buildHTML', function() {
	return gulp.src('partials/*.html')
		.pipe(gulp.dest('dist/partials'));
});

gulp.task('buildCSS', function() {
	var files = [
		'css/ssi.css',
		'node_modules/bootflat/css/bootstrap.min.css',
		'node_modules/bootflat/bootflat/css/bootflat.min.css',
		'node_modules/slick-carousel/slick/slick.css',
		'node_modules/slick-carousel/slick/slick-theme.css'		
	];

	gulp.src('css/fontes/*')
		.pipe(gulp.dest('dist/css/fontes'));
	return gulp.src(files)
		.pipe(gulp.dest('dist/css'));
});

gulp.task('buildJS', function() {
	var files = [
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/angular/angular.min.js',
		'node_modules/slick-carousel/slick/slick.min.js',
		'js/app.js', 'js/diretivas.js', 'js/script.js'
	];
	return gulp.src(files)
		.pipe(gulp.dest('dist/js'));
});

gulp.task('makeDist', ['clean', 'buildHTML', 'buildCSS', 'buildJS', 'buildImages'], function() {
	return gulp.src('index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['makeDist'], function() {
	return gulp.src('dist/**/*')
		.pipe(ghPagesDeploy());
})

gulp.task('default', ['server']);