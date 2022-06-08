const gulp = require('gulp');
const { parallel, series, dest } = require('gulp');

const { scssTask } = require('./lib/scss-task');
const { watchTask } = require('./lib/watch-task');
const { jsTask } = require('./lib/js-task');

const dev = series(scssTask, jsTask,  watchTask);
const build = series(scssTask, jsTask, watchTask);

module.exports = {
	default: dev,
	dev: dev,
	build: build
};
