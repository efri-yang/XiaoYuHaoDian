

const gulp = require("gulp");

const htmls = require('./FontEndGulp/htmls');
const styles = require('./FontEndGulp/styles');
const scripts = require('./FontEndGulp/scripts');
const images = require('./FontEndGulp/images');
const others = require('./FontEndGulp/others');
const watchs = require('./FontEndGulp/watch');
const servers = require('./FontEndGulp/server');
const cleans = require('./FontEndGulp/clean');






gulp.task('dev', gulp.series(cleans.DevClean,scripts.DevScripts,styles.DevStyles,htmls.DevHtmls,gulp.parallel(images.DevImages,others.DevOthers,watchs.DevWatchs,servers.DevServer)));


gulp.task('dist', gulp.series(scripts.DistScripts,styles.DistStyles,htmls.DistHtmls,gulp.parallel(images.DistImages,watchs.DistWatchs,servers.DistServer)));

// gulp.task('dist', gulp.series(cleans.DistClean,scripts.DistScripts,styles.DistStyles,htmls.DistHtmls,gulp.parallel(images.DistImages,others.DistOthers,watchs.DistWatchs,servers.DistServer)));



 // gulp.task('dev', gulp.series(cleans.DevClean, gulp.series(scripts.DevScripts,styles.DevStyles,htmls.DevHtmls,images.DevImages,others.DevOthers,watchs.DevWatchs,servers.DevServer)));
 

// var rev = require('gulp-rev');

// gulp.task('css', function () {
//     return gulp.src('FontEndSrc/**/*.css')
//         .pipe(rev())
//         .pipe(gulp.dest('FontEndDev'))
//         .pipe( rev.manifest() )
//         .pipe( gulp.dest( 'rev/css' ) );
// });

// gulp.task('scripts', function () {
//     return gulp.src('FontEndSrc/**/*.js')
//         .pipe(rev())
//         .pipe(gulp.dest('FontEndDev'))
//         .pipe( rev.manifest() )
//         .pipe( gulp.dest( 'rev/js' ) );
// });



// var revCollector = require('gulp-rev-collector');


// gulp.task('rev', function () {
//     return gulp.src(['rev/**/*.json', 'FontEndDev/**/*.html'])
//         .pipe( revCollector({
//             replaceReved: true,
//             dirReplacements: {
//                 'css': '/dist/css'
//             }
//         }) )
      
//         .pipe( gulp.dest('FontEndDev') );
// });









