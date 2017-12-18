'use strict';

const  gulp= require("gulp");
const  imagemin=require("gulp-imagemin");
const  imageminJpegoptim=require("imagemin-jpegoptim");
const  imageminPngquant=require("imagemin-pngquant");

const debug=require('gulp-debug');
const changed = require('gulp-changed');
const gulpif=require("gulp-if");


const conf=require('./config.js');
const server=require("./server.js")

/**
 * .pipe(changed(c_paths.dev)) 拷贝改变的那张就可以了
 * 但是遇到修改、重命名就不行了，所以需要考虑下新方案
 */

function DevImages(){
	return gulp.src(conf.staticSrc+ conf.mod +'/**/*.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}')
				.pipe(changed(conf.dev))
			    .pipe(gulp.dest(conf.staticDev+conf.mod))
			    .pipe(server.reload({stream: true}));	
}


function DistImages(){
	return gulp.src(conf.staticSrc+ conf.mod +'/**/*.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}')
				// .pipe(changed(conf.dev))
				// .pipe(imagemin())
			    .pipe(gulp.dest(conf.staticServerFolder+conf.mod))
			    .pipe(server.reload({stream: true}));	
}



module.exports={
	DevImages:DevImages,
	DistImages:DistImages
};