"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync");

var projectPaths = {
    webroot: "./wwwroot/",
    projectRoot: "./",
    npmSrc: "./node_modules/",
    npmLibs: "./wwwroot/lib/npmLibs/"
};

var filePaths = {
    js: projectPaths.webroot + "js/**/*.js",
    minJs: projectPaths.webroot + "js/**/*.min.js",
    css: projectPaths.webroot + "css/**/*.css",
    minCss: projectPaths.webroot + "css/**/*.min.css",
    concatJsDest: projectPaths.webroot + "js/site.min.js",
    concatCssDest: projectPaths.webroot + "css/site.min.css",
    html: projectPaths.projectRoot + "Views/**/*.cshtml"
};

// Cleaning
gulp.task("clean:js", function (cb) {
    rimraf(filePaths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(filePaths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

// Minifying
gulp.task("min:js", function () {
    return gulp.src([filePaths.js, "!" + filePaths.minJs], { base: "." })
        .pipe(concat(filePaths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([filePaths.css, "!" + filePaths.minCss])
        .pipe(concat(filePaths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

// Minify css + js and sync browser
gulp.task("watch", function () {

    browserSync.init({
        //TODO: This has to be user-specific. Find a way to move it to some personal config file.
        proxy: "http://localhost:56293/"
    });

    gulp.watch(filePaths.js, ["min:js", browserSync.reload]);
    gulp.watch(filePaths.css, ["min:css", browserSync.reload]);
    gulp.watch(filePaths.html, [browserSync.reload]);
});

// Tasks to copy NPM dependencies to the frontend library folder
gulp.task("copy-deps:systemjs", function() {
    return gulp.src(projectPaths.npmSrc + "/systemjs/dist/**/*.*", { base: projectPaths.npmSrc + "/systemjs/dist/" })
         .pipe(gulp.dest(projectPaths.npmLibs + "/systemjs/"));
});

gulp.task("copy-deps:angular2", function () {
    return gulp.src(projectPaths.npmSrc + "/angular2/bundles/**/*.js", { base: projectPaths.npmSrc + "/angular2/bundles/" })
         .pipe(gulp.dest(projectPaths.npmLibs + "/angular2/"));
});

gulp.task("copy-deps:es6-shim", function () {
    return gulp.src(projectPaths.npmSrc + '/es6-shim/es6-sh*', { base: projectPaths.npmSrc + '/es6-shim/' })
         .pipe(gulp.dest(projectPaths.npmLibs + '/es6-shim/'));
});

gulp.task("copy-deps:es6-promise", function () {
    return gulp.src(projectPaths.npmSrc + '/es6-promise/dist/**/*.*', { base: projectPaths.npmSrc + '/es6-promise/dist/' })
         .pipe(gulp.dest(projectPaths.npmLibs + '/es6-promise/'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src(projectPaths.npmSrc + '/rxjs/bundles/*.*', { base: projectPaths.npmSrc + '/rxjs/bundles/' })
         .pipe(gulp.dest(projectPaths.npmLibs + '/rxjs/'));
});

gulp.task("copy-deps", [
    "copy-deps:systemjs", "copy-deps:angular2", "copy-deps:es6-shim", "copy-deps:es6-promise", "copy-deps:rxjs"]);