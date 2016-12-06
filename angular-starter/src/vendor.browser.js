// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
define(["require", "exports", '@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/core', '@angular/common', '@angular/forms', '@angular/http', '@angular/router', '@angularclass/hmr', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap'], function (require, exports) {
    if ('production' === ENV) {
    }
    else {
    }
});
//# sourceMappingURL=vendor.browser.js.map