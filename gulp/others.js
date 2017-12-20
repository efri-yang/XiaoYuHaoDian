'use strict';

const gulp = require('gulp');
const filter = require('gulp-filter');
const changed = require('gulp-changed');
const gulpif=require("gulp-if");
const conf = require('./config.js');
const server = require("./server.js")


function others() {
    return gulp.src([conf.src + '/**/*', '!' + conf.src + '/**/*.{html,js,scss,css,sass,png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}'])
        .pipe(filter(function(file) {
            return file.stat.isFile();
        }))
        .pipe(gulpif(conf.env==="d",changed(conf.dest)))
        .pipe(gulp.dest(conf.dest));
}

module.exports ={
	other:others
}