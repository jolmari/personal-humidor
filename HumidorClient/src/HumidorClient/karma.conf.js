// Karma configuration
// Generated on Wed Jul 20 2016 14:00:19 GMT+0300 (FLE Daylight Time)

module.exports = function(config) {

    var dependencies = [
        '@angular',
        'rxjs',
    ];

    var configuration = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './wwwroot',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [

            // Polyfills.
            //'lib/npmLibs/es6-shim/es6-shim.js',
            'lib/reflect-metadata/Reflect.js',

            // System.js for module loading
            'lib/systemjs/system-polyfills.js',
            'lib/systemjs/system.src.js',

            // Zone.js dependencies
            'lib/zone.js/zone.js',
            'lib/zone.js/jasmine-patch.js',
            'lib/zone.js/async-test.js',
            'lib/zone.js/fake-async-test.js',

            // RxJs.
            { pattern: 'lib/rxjs/**/*.js', included: false, watched: false },
            
            // Karma
            { pattern: 'config/karma-test-shim.js', included: true, watched: true },
            
            // paths loaded via module imports
            // Angular itself
            { pattern: 'lib/@angular/**/*.js', included: false, watched: true },
            
            // Our built application code
            { pattern: 'app/**/*.js', included: false, watched: true },
            
            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            { pattern: 'views/**/*.html', included: false, watched: true },
            { pattern: 'css/**/*.css', included: false, watched: true },
        ],


        // list of files to exclude
        exclude: [
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/app/": "/base/app/"
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'htmlDetailed'],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-html-detailed-reporter'
        ],

        htmlDetailed: {
            dir: "../Reports",
            splitResults: false
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    };

    config.set(configuration);
};
