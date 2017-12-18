'use strict';

const gulp=require("gulp");
const del=require("del");
const gulpif=require("gulp-if");


const conf=require("./config");



function DevClean(){
	return del([conf.dev+conf.mod]);
}

// var delHtml=conf.htmlDistFolder + conf.mod;
// var delStatic=conf.serverFolder + conf.mod;
function DistClean(){
	// return del([delHtml,delStatic]);
}


module.exports={
	DevClean:DevClean,
	DistClean:DistClean
}