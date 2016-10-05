require("es6-shim");
require("reflect-metadata");
require("zone.js/dist/zone");
require("zone.js/dist/long-stack-trace-zone");
require("zone.js/dist/jasmine-patch");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
require("zone.js/dist/sync-test");

const browserTesting = require("@angular/platform-browser-dynamic/testing");
const coreTesting = require("@angular/core/testing");

coreTesting.setBaseTestProviders(
    browserTesting.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browserTesting.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

// Look for test file patterns and add to context
// *.spec.ts in ../Scripts/**
const context = require.context("../Scripts/", true, /\.spec\.ts$/);
context.keys().forEach(context);

// Enable full stack information.
// Timeout for long async operations.
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;