var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var ghPagesDeploy = require('gulp-gh-pages');
var htmlreplace = require('gulp-html-replace');


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
		'node_modules/bootflat/css/bootstrap.min.css',
		'node_modules/bootflat/bootflat/css/bootflat.min.css',
		'node_modules/slick-carousel/slick/slick.css',
		'node_modules/slick-carousel/slick/slick-theme.css',	
		'css/*.css'
	];

	gulp.src('css/fontes/*')
		.pipe(gulp.dest('dist/css/fontes'));

	return gulp.src(files)
		.pipe(concat('styles.min.css'))
		// .pipe(uglify())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('buildJS', function() {
	var files = [
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/angular/angular.min.js',
		'node_modules/angular-sanitize/angular-sanitize.min.js',
		'node_modules/slick-carousel/slick/slick.min.js',
	];

	gulp.src(files)
		.pipe(gulp.dest('dist/js'));

	return gulp.src('js/*.js')
		.pipe(concat('all.min.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('replace', function() {
	gulp.src('index.html')
		.pipe(htmlreplace({
			'css': 'css/styles.min.css',
			'js':
				[
					'js/jquery.min.js',
					'js/bootstrap.min.js',
					'js/angular.min.js',
					'js/angular-sanitize.min.js',
					'js/slick.min.js',
					'js/all.min.js'
				]
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('concatFiles', ['buildCSS', 'buildJS']);

gulp.task('makeDist', ['buildImages', 'buildHTML', 'concatFiles', 'replace']);

gulp.task('deploy', ['makeDist'], function() {
	return gulp.src('dist/**/*')
		.pipe(ghPagesDeploy());
})

gulp.task('default', ['server']);