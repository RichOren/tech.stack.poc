// TODO(gdi2290): switch to DLLs
define(["require", "exports", 'core-js/es6/symbol', 'core-js/es6/object', 'core-js/es6/function', 'core-js/es6/parse-int', 'core-js/es6/parse-float', 'core-js/es6/number', 'core-js/es6/math', 'core-js/es6/string', 'core-js/es6/date', 'core-js/es6/array', 'core-js/es6/regexp', 'core-js/es6/map', 'core-js/es6/set', 'core-js/es6/weak-map', 'core-js/es6/weak-set', 'core-js/es6/typed', 'core-js/es6/reflect', 'core-js/es7/reflect', 'zone.js/dist/zone', 'ts-helpers'], function (require, exports) {
    if ('production' === ENV) {
    }
    else {
        // Development
        Error.stackTraceLimit = Infinity;
        require('zone.js/dist/long-stack-trace-zone');
    }
});
//# sourceMappingURL=polyfills.browser.js.map