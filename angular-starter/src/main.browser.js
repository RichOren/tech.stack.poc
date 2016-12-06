define(["require", "exports", '@angular/platform-browser-dynamic', './app/environment', '@angularclass/hmr', './app'], function (require, exports, platform_browser_dynamic_1, environment_1, hmr_1, app_1) {
    /*
     * Bootstrap our Angular app with a top level NgModule
     */
    function main() {
        return platform_browser_dynamic_1.platformBrowserDynamic()
            .bootstrapModule(app_1.AppModule)
            .then(environment_1.decorateModuleRef)
            .catch(function (err) { return console.error(err); });
    }
    exports.main = main;
    // needed for hmr
    // in prod this is replace for document ready
    hmr_1.bootloader(main);
});
//# sourceMappingURL=main.browser.js.map