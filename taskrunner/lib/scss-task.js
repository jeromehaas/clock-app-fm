const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const uflify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const webp = require('gulp-webp');
const { parallel, series, dest } = require('gulp');

const scssTask = ( done ) => {
	gulp.src(['../src/scss/configs/reset.scss', '../src/scss/configs/variables.scss', '../src/scss/configs/fonts.scss', '../src/scss/configs/global.scss', '../src/scss/configs/typography.scss', '../src/scss/configs/icons.scss', '../src/scss/sections/*.scss'  ])
		.pipe(plumber())
		.pipe(concat('main.min.css'))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('../css'))
	done();
};

module.exports = {
	scssTask
};
