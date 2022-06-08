const gulp = require('gulp');
const webpackConfig = require('../../webpack.config');
const webpackStream = require('webpack-stream');
const plumber = require('gulp-plumber');
const { dest } = require('gulp');

const jsTask = ( done ) => {
	gulp.src(['../src/js/main.js'])
		.pipe(plumber())
		.pipe(webpackStream(webpackConfig))
		.pipe(dest('../js/'));
	done();
};

module.exports = {
	jsTask 
};