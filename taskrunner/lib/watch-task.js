const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { watch } = require('gulp');
const { scssTask } = require('./scss-task');
const { jsTask } = require('./js-task');
const { imageTask } = require('./image-task');

const watchTask = ( done ) => {
	browserSync.init({
		server: { baseDir: '../' },
		open: false,
		port: 3007,
		ui: { port: 3000 }
	});	
	watch(['../src/scss/configs/*.scss', '../src/scss/sections/*.scss'], scssTask).on('change', browserSync.reload);
	watch(['../src/js/app.js'], jsTask).on('change', browserSync.reload);
	watch(['../src/media/images/*.+(png|jpg|jpeg|gif'], imageTask).on('change', browserSync.reload);
};

module.exports = {
	watchTask
};