/// <binding ProjectOpened='watch' />
"use strict";

var gulp = require("gulp"),
    shell = require("gulp-shell"),
    sass = require("gulp-sass"),
    rimraf = require("gulp-rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync");

var projectPaths = {
    webroot: "./wwwroot/",
    projectRoot: "./",
    npmSrc: "./node_modules/",
    npmLibs: "./wwwroot/lib/",
    app: "./wwwroot/app/"
};

var filePaths = {
    js: projectPaths.app + "**/*.js*",
    css: projectPaths.webroot + "css/**/*.css",
    concatMinCssDest: projectPaths.webroot + "css/site.min.css",
    concatCssDest: projectPaths.webroot + "css/site.css",
    html: [projectPaths.projectRoot + "Views/**/*.cshtml", projectPaths.webroot + "views/**/*.html"],
    scss: projectPaths.projectRoot + "Styles/**/*.scss",
    scssMain: projectPaths.projectRoot + "Styles/site.scss"
};


// Compile SASS and sync browser on file changes
gulp.task("watch",
    function () {

        browserSync.init({
            //TODO: This has to be user-specific. Find a way to move it to some personal config file.
            proxy: "http://localhost:56293/"
        });

        gulp.watch(filePaths.js).on("change", browserSync.reload);
        gulp.watch(filePaths.css).on("change", browserSync.reload);
        gulp.watch(filePaths.html).on("change", browserSync.reload);
        gulp.watch(filePaths.scss, ["styles:sass"]);
    });


gulp.task("styles:site-min",
    function () {
        return gulp.src(filePaths.scssMain)
                .pipe(sass().on("error", sass.logError))
                .pipe(concat(filePaths.concatMinCssDest))
                .pipe(cssmin())
                .pipe(gulp.dest("."));
        });

gulp.task("styles:site-full",
    function() {
        return gulp.src(filePaths.scssMain)
            .pipe(sass().on("error", sass.logError))
            .pipe(concat(filePaths.concatCssDest))
            .pipe(gulp.dest("."));
    });

gulp.task("copy-deps:bootstrap",
    function () {
        return gulp.src(projectPaths.npmSrc + "/bootstrap/dist/**/*.*",
            { base: projectPaths.npmSrc + "/bootstrap/dist/" })
            .pipe(gulp.dest(projectPaths.npmLibs + "/bootstrap/"));
    });

// Cleaning scripts
gulp.task("clean:css",
    function () {
        return gulp.src(filePaths.css, { read: false })
            .pipe(rimraf());
    });

gulp.task("clean:js",
    function () {
        return gulp.src([filePaths.js, "./wwwroot/app/**/"], { read: false })
            .pipe(rimraf());
    });

gulp.task("clean", ["clean:css", "clean:js"]);
gulp.task("styles:sass", ["styles:site-full", "styles:site-min"]);
gulp.task("copy-deps",
[
    "copy-deps:bootstrap"
]);

gulp.task("deploy", ["copy-deps", "styles:sass"]);