var gulp = require('gulp');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');
var ghPagesDeploy = require('gulp-gh-pages');

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});
	gulp.watch('src/**/*.html').on('change', browserSync.reload);
});

gulp.task('buildImages', function() {
	gulp.src('src/img/*')
	.pipe(gulp.dest('dist/img'));
});

gulp.task('makeDist', function() {
	
	return gulp.src('page.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['makeDist'], function() {
	return gulp.src('dist/*')
		.pipe(ghPagesDeploy());
})

gulp.task('default', ['server']);