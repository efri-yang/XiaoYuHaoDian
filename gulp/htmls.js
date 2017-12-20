'user strict';

const gulp=require("gulp");
const fileInclude = require("gulp-file-include");
const debug=require('gulp-debug');

const changed = require('gulp-changed');

const gulpif=require("gulp-if");

var conf=require("./config.js");
const server=require("./server.js")


/**
 * 这个htmlsDev 有个缺陷，就是你修改了include的内容，所有的外围的html 都会被执行复制，效率有问题
 *  gulp-changed 只能检测到.html的更改,对于include 却无能为力
 */

function htmls(){
	return gulp.src([conf.src +'/**/*.html',"!" + conf.src+'/**/_*.html'])
		  	.pipe(fileInclude({
            	prefix: '@@',
            	basepath: '@file'
        	}))
            .pipe(debug({title: 'htmls-------------'}))
        	.pipe(gulp.dest(conf.dest));
            
}








module.exports={
	html:htmls
};