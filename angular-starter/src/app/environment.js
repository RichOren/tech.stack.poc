define(["require", "exports", '@angular/platform-browser', '@angular/core'], function (require, exports, platform_browser_1, core_1) {
    // Environment Providers
    var PROVIDERS = [];
    // Angular debug tools in the dev console
    // https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
    var _decorateModuleRef = function identity(value) { return value; };
    if ('production' === ENV) {
        core_1.enableProdMode();
        // Production
        _decorateModuleRef = function (modRef) {
            platform_browser_1.disableDebugTools();
            return modRef;
        };
        PROVIDERS = PROVIDERS.slice();
    }
    else {
        _decorateModuleRef = function (modRef) {
            var appRef = modRef.injector.get(core_1.ApplicationRef);
            var cmpRef = appRef.components[0];
            var _ng = window.ng;
            platform_browser_1.enableDebugTools(cmpRef);
            window.ng.probe = _ng.probe;
            window.ng.coreTokens = _ng.coreTokens;
            return modRef;
        };
        // Development
        PROVIDERS = PROVIDERS.slice();
    }
    exports.decorateModuleRef = _decorateModuleRef;
    exports.ENV_PROVIDERS = PROVIDERS.slice();
});
//# sourceMappingURL=environment.js.map