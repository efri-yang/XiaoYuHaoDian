'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();



const conf = require('./config.js');



function DevServer(){
	browserSync.init({
        server:{
            baseDir:conf.dev,
            directory:true
        }
    });
}


function DistServer(){
    browserSync.init({
        server:{
            baseDir:".",
            directory:true
        }
    });
}




module.exports={
    reload:browserSync.reload,
    DevServer:DevServer,
    DistServer:DistServer
};