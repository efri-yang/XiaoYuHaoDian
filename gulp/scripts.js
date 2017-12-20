'use strict';

const gulp = require('gulp');

const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const debug = require('gulp-debug');
const changed = require('gulp-changed');


const conf = require('./config.js');
const server = require("./server.js");


function scripts(){
    var compress=conf.compress==true || conf.compress=="js";
    return gulp.src(conf.src + '/**/*.js')
        .pipe(gulpif(compress, uglify()))
        .pipe(gulpif(conf.env==="d",changed(conf.dest)))
        .pipe(gulp.dest(conf.dest))
        .pipe(server.reload({ stream: true }));

}



module.exports={
	script:scripts
};
