const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { watch } = require('gulp');
const { scssTask } = require('./scss-task');

const watchTask = ( done ) => {
	browserSync.init({
		server: { baseDir: '../' },
		open: false,
		port: 3007,
		ui: { port: 3000 }
	});	
	watch(['../src/scss/configs/reset.scss', '../src/scss/configs/variables.scss', '../src/scss/configs/fonts.scss', '../src/scss/configs/global.scss', '../src/scss/configs/typography.scss'], scssTask).on('change', browserSync.reload);
};

module.exports = {
	watchTask
};