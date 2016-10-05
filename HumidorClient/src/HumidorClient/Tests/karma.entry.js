require('core-js/es6');
require('core-js/es7/reflect');

require("zone.js/dist/zone");
require("zone.js/dist/long-stack-trace-zone");
require("zone.js/dist/proxy");
require("zone.js/dist/sync-test");
require("zone.js/dist/jasmine-patch");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");

require("rxjs/Rx");

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);

// Look for test file patterns and add to context
// *.spec.ts in ../Scripts/**
const context = require.context("../Scripts/", true, /\.spec\.ts$/);
context.keys().forEach(context);

// Enable full stack information.
// Timeout for long async operations.
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;