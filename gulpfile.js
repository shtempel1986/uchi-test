let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  rename = require('gulp-rename'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  cache = require('gulp-cache'),
  babel = require('gulp-babel'),
  autoprefixer = require('gulp-autoprefixer'),
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  concat = require('gulp-concat'),
  pug = require('gulp-pug'),
	cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
  browserify = require('gulp-browserify');

//==========================================================
//= libs
//==========================================================

gulp.task('libs',()=>{
  let jsLibs = gulp.src(['src/js/jquery.min.js','src/libs/**/*.js'])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('src/js'));
  return gulp.src('src/libs/**/*.css')
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('src/css'));
});


//==========================================================
//= pug
//==========================================================

gulp.task('pug',()=>{
  return gulp.src('src/pug/pages/*.pug')
    .pipe(pug({
      pretty: true,
      basedir: 'src/pug'
    }))
    .pipe(gulp.dest('src'));
});

//==========================================================
//= sass
//==========================================================

gulp.task('sass', function () {
  return gulp.src('src/sass/styles.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 version', '>1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(gulp.dest('src/css'))
		.pipe(cssnano())
		.pipe(rename({suffix:'.min'}))
		.pipe(sourcemaps.write('/maps'))
		.pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}))
});

//==========================================================
//=            browser-sync
//==========================================================

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'src'
    },
    open:false,
    notify: false
  });
});

//===========================================================
//=   BABEL
//===========================================================

gulp.task("babel", function () {
  return gulp.src("src/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("src/js"));
});

//===========================================================
//=   BROWSERIFY
//===========================================================

gulp.task('browserify',['babel'],()=>{
  return gulp.src('src/js/main.js')
    .pipe(browserify({}))
    .pipe(rename('scripts.js'))
		.pipe(gulp.dest('src/js'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('src/js'));
});

//===========================================================
//=  СЛЕЖЕНИЕ ЗА ИЗМЕНЕНИЕМ ФАЙЛОВ
//===========================================================

gulp.task('watch', ['browser-sync', 'browserify', 'pug', 'libs'], function () {
  // gulp.watch('src/pug/**/*.pug', ['pug', browserSync.reload]);
  gulp.watch('src/sass/**/*.sass', ['sass',browserSync.reload]);
  gulp.watch('src/es6/**/*.js', ['browserify',browserSync.reload]);
  gulp.watch('src/*.html', ['',browserSync.reload]);
});

gulp.task('clean', function () {
  return del.sync('dist');
});

//===========================================================
//=  IMAGES
//===========================================================

gulp.task('img', function () {
  return gulp.src('src/img/**/*')
    .pipe(cache(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imageminJpegRecompress({
        loops: 5,
        min: 65,
        max: 70,
        quality:'medium'
      }),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: '65-70', speed: 5})
    ],{
      verbose: true
    })))
    .pipe(gulp.dest('dist/img'));
});

//===========================================================
//=  BUILD
//===========================================================

gulp.task('build', ['clean', 'img', 'sass', 'browserify'], function () {
  let buildCss = gulp.src([
    'src/css/main.min.css',
    'src/css/libs.min.css'
  ]).pipe(gulp.dest('dist/css'));
  let buildFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
  let buildHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('clear', function () {
  return cache.clearAll();
});

gulp.task('default', ['watch']);

gulp.task('lib',()=>{
  return gulp.src('src/libs/clean.css')
		.pipe(cssnano())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('src/libs'));
});