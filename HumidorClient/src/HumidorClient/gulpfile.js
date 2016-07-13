/// <binding ProjectOpened='watch' />
"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
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
    npmLibs: "./wwwroot/lib/npmlibs/"
};

var filePaths = {
    js: projectPaths.webroot + "app/**/*.js",
    minJs: projectPaths.webroot + "app/**/*.min.js",
    css: projectPaths.webroot + "css/**/*.css",
    minCss: projectPaths.webroot + "css/**/*.min.css",
    concatMinCssDest: projectPaths.webroot + "css/site.min.css",
    concatCssDest: projectPaths.webroot + "css/site.css",
    html: projectPaths.projectRoot + "Views/**/*.cshtml",
    scss: projectPaths.projectRoot + "Styles/**/*.scss",
    scssMain: projectPaths.projectRoot + "Styles/site.scss"
};

gulp.task("styles:sass",
    function () {
        rimraf(filePaths.css,
        () => {
            return gulp.src(filePaths.scssMain)
                .pipe(sass().on("error", sass.logError))
                .pipe(concat(filePaths.concatMinCssDest))
                .pipe(cssmin())
                .pipe(gulp.dest("."));
        });
    });

// Compile SASS and sync browser on file changes
gulp.task("watch",
    function() {

        browserSync.init({
            //TODO: This has to be user-specific. Find a way to move it to some personal config file.
            proxy: "http://localhost:56293/"
        });

        gulp.watch(filePaths.js).on("change", browserSync.reload);
        gulp.watch(filePaths.css).on("change", browserSync.reload);
        gulp.watch(filePaths.html).on("change", browserSync.reload);
        gulp.watch(filePaths.scss, ["styles:sass"]);
    });

// Tasks to copy NPM dependencies to the frontend library folder
gulp.task("copy-deps:@angular",
    function() {
        return gulp.src(projectPaths.npmSrc + "/@angular/**/*.js", { base: projectPaths.npmSrc + "/@angular/" })
            .pipe(gulp.dest(projectPaths.npmLibs + "/@angular/"));
    });

gulp.task("copy-deps:rxjs",
    function() {
        return gulp.src(projectPaths.npmSrc + "/rxjs/**/*.js", { base: projectPaths.npmSrc + "/rxjs/" })
            .pipe(gulp.dest(projectPaths.npmLibs + "/rxjs/"));
    });

gulp.task("copy-deps:in-memory-webapi",
    function() {
        return gulp.src(projectPaths.npmSrc + "/angular2-in-memory-web-api/**/*.js",
            { base: projectPaths.npmSrc + "/angular2-in-memory-web-api/" })
            .pipe(gulp.dest(projectPaths.npmLibs + "/angular2-in-memory-web-api/"));
    });

gulp.task("copy-deps:systemjs",
    function() {
        return gulp.src(projectPaths.npmSrc + "/systemjs/dist/**/*.*",
            { base: projectPaths.npmSrc + "/systemjs/dist/" })
            .pipe(gulp.dest(projectPaths.npmLibs + "/systemjs/"));
    });

gulp.task("copy-deps:shim",
    function() {
        return gulp.src(projectPaths.npmSrc + "/core-js/client/**/*.*",
            { base: projectPaths.npmSrc + "/core-js/client/" })
            .pipe(gulp.dest(projectPaths.npmLibs + "/core-js/"));
    });

gulp.task("copy-deps:zonejs",
    function() {
        return gulp.src(projectPaths.npmSrc + "/zone.js/dist/**/*.*", { base: projectPaths.npmSrc + "/zone.js/dist/" })
            .pipe(gulp.dest(projectPaths.npmLibs + "/zone.js/"));
    });

gulp.task("copy-deps:reflect-metadata",
    function() {
        return gulp.src(projectPaths.npmSrc + "/reflect-metadata/*.js",
            { base: projectPaths.npmSrc + "/reflect-metadata/" })
            .pipe(gulp.dest(projectPaths.npmLibs + "/reflect-metadata/"));
    });

gulp.task("copy-deps",
[
    "copy-deps:@angular", "copy-deps:rxjs", "copy-deps:in-memory-webapi",
    "copy-deps:systemjs", "copy-deps:shim", "copy-deps:zonejs", "copy-deps:reflect-metadata"
]);