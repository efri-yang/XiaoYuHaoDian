'use strict';

const gulp = require('gulp');
const filter = require('gulp-filter');
const changed = require('gulp-changed');
const gulpif=require("gulp-if");
const conf = require('./config.js');
const server = require("./server.js")


function DevOthers() {
    return gulp.src([conf.staticSrc+ conf.mod + '/**/*', '!' + conf.staticSrc + conf.mod + '/**/*.{html,js,scss,css,sass,png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}'])
        .pipe(filter(function(file) {
            return file.stat.isFile();
        }))
        .pipe(changed(conf.staticDev+conf.mod))
        .pipe(gulp.dest(conf.staticDev+conf.mod));
}

function DistOthers() {
    return gulp.src([conf.staticSrc + conf.mod + '/**/*', '!' + conf.staticSrc + conf.mod + '/**/*.{html,js,scss,css,sass,png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}'])
        .pipe(filter(function(file) {
            return file.stat.isFile();
        }))
        .pipe(changed(conf.staticServerFolder+conf.mod))
        .pipe(gulp.dest(conf.staticServerFolder+conf.mod));
}

module.exports ={
	DevOthers:DevOthers,
	DistOthers:DistOthers
}