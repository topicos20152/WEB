var concat      = require('gulp-concat');
var del         = require('del');
var gulp        = require('gulp');
var prefix      = require('gulp-autoprefixer');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');

var paths = {
  scripts_src: 'app/assets/scripts/src/**/*.js',
  scripts_dist: 'app/assets/scripts',
  sass_src: 'app/assets/styles/src/**/*.{scss,sass,css}',
  sass_dist: 'app/assets/styles',
  sass_main: 'app/assets/styles/src/main.scss',
};

var paths_admin = {
  scripts_src: 'app/assets@admin/scripts/src/**/*.js',
  scripts_dist: 'app/assets@admin/scripts',
  sass_src: 'app/assets@admin/styles/src/**/*.{scss,sass,css}',
  sass_dist: 'app/assets@admin/styles',
  sass_main: 'app/assets@admin/styles/src/main.scss',
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});

gulp.task('sass', ['clean'], function () {
  gulp.src(paths.sass_main)
    .pipe(sass({outputStyle: 'compressed', errLogToConsole: true, includePaths: ['app/assets/styles/src']}))
    .pipe(prefix("last 500 version"))
    .pipe(gulp.dest(paths.sass_dist));
});

gulp.task('sass_admin', ['clean'], function () {
  gulp.src(paths_admin.sass_main)
    .pipe(sass({style: 'compact', errLogToConsole: true, includePaths: ['app/assets@admin/styles/src']}))
    .pipe(prefix("last 500 version"))
    .pipe(gulp.dest(paths_admin.sass_dist))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths_admin.sass_dist));
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(paths.scripts_src)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.scripts_dist))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts_dist));
});

gulp.task('scripts_admin', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(paths_admin.scripts_src)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths_admin.scripts_dist))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(paths_admin.scripts_dist));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sass_src, ['sass']);
  gulp.watch(paths.scripts_src, ['scripts']);
});

gulp.task('watch_admin', function() {
  gulp.watch(paths_admin.sass_src, ['sass_admin']);
  gulp.watch(paths_admin.scripts_src, ['scripts_admin']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass', 'scripts', 'watch_admin', 'sass_admin', 'scripts_admin']);
// gulp.task('default', ['watch', 'sass', 'scripts']);
