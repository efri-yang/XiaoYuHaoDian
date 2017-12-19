'user strict';

const gulp=require("gulp");


const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

var rev = require('gulp-rev');  

const debug=require('gulp-debug');
const changed = require('gulp-changed');

const cleanCSS = require("gulp-clean-css");

const conf = require('./config.js');
const gulpif=require("gulp-if");

const server=require("./server.js");

var modifyCssUrls = require('gulp-modify-css-urls');



/**
 * gulp-changed 这个时候不起作用 所以没用,
 * 这样书写基本问题提，只是某个.scss 修改了，所有的.css 会被拷贝,
 * 但是想想 囚scss 改变 那么引入的scss 确实要相应的改变，也还好
 * 
 */
function DevStyles(){
	var compress=conf.compress==true || conf.compress=="css";
	return gulp.src(conf.staticSrc+conf.mod + '/**/*.{scss,sass,css}')
		.pipe(sourcemaps.init({sourcemap:true}))
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write({includeContent: false}))
		.pipe(autoprefixer({
			browsers: ['> 1%', 'IE 7']
		}))
		// .pipe(rev())
		.pipe(gulpif(compress,cleanCSS()))
		.pipe(gulp.dest(conf.staticDev+ conf.mod))
		// .pipe(rev.manifest({
		// 	merge:true
		// }))
		// .pipe(gulp.dest(conf.revSrc))
		.pipe(server.reload({stream:true}));
}

function DistStyles(){
	//不不传递的时候  传递 css
	var compress=(!!conf.compress || conf.compress.toLowerCase()=="css") ? true :false;
	return gulp.src(conf.staticSrc+conf.mod + '/**/*.{scss,sass,css}')
		
		.pipe(sass().on('error', sass.logError))
	
		.pipe(autoprefixer({
			browsers: ['> 1%', 'IE 7']
		}))
		.pipe(modifyCssUrls({
			modify: function (url, filePath) {
			   var serverFolder=!!conf.serverFolder ? ("/"+conf.serverFolder) :"";
		       return serverFolder+url;
		    }
		}))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['> 1%', 'IE 7']
		}))
		
		
		.pipe(gulpif(compress,cleanCSS()))
		.pipe(gulp.dest(conf.staticServerFolder+conf.mod))
		.pipe(server.reload({stream:true}));
}

module.exports={
	DevStyles:DevStyles,
	DistStyles:DistStyles
};