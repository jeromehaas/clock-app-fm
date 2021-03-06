const gulp = require('gulp');
const { dest } = require('gulp');
const webp = require('gulp-webp');

const imageTask = ( done ) => {
	gulp.src(['../media/images/*.+(png|jpg|gif)'])
		.pipe(webp())
		.pipe(dest('../media/images/'));
	done();
};

module.exports = {
	imageTask
};