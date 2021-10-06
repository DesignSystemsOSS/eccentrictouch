const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function sassTaskDev() {
    return src(['source/**/*.scss', '!source/**/*.test.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist'));
}

function watchTask() {
    watch(['source/**/*.scss', '!source/**/*.test.scss'], sassTaskDev());
}

exports.default = series(
    sassTaskDev,
    // watchTask
);
