const gulp = require('gulp');
const { parallel, series, dest } = require('gulp');

const { scssTask } = require('./lib/scss-task');
const { watchTask } = require('./lib/watch-task');
const { jsTask } = require('./lib/js-task');
const { imageTask } = require('./lib/image-task');

const dev = series(scssTask, jsTask,  watchTask);
const build = series(scssTask, jsTask, imageTask, watchTask);

module.exports = {
	default: dev,
	dev: dev,
	build: build
};
