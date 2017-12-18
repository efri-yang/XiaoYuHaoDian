'use strict';

const gulp = require('gulp');

const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const debug = require('gulp-debug');
const changed = require('gulp-changed');


const conf = require('./config.js');
const server = require("./server.js");
var rev = require('gulp-rev');  

function DevScripts(){
    var compress=conf.compress==true || conf.compress=="js";
    return gulp.src(conf.staticSrc+conf.mod +  '/**/*.js')
        .pipe(gulpif(compress, uglify()))
        .pipe(changed(conf.dev))
        .pipe(gulp.dest(conf.staticDev + conf.mod))
        .pipe(server.reload({ stream: true }));

}

function DistScripts(){

     var compress=conf.compress==true || conf.compress=="js";
    return gulp.src(conf.staticSrc + conf.mod + '/**/*.js')
        .pipe(gulpif(compress, uglify()))
        .pipe(gulp.dest(conf.staticServerFolder+conf.mod))
        .pipe(server.reload({ stream: true }));

}





module.exports={
	DevScripts:DevScripts,
	DistScripts:DistScripts
};
