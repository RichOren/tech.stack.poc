define(["require", "exports", 'redux', '../reducers', 'redux-devtools', 'redux-thunk', '../middleware/promise-middleware', './logger'], function (require, exports, redux_1, reducers_1, redux_devtools_1, redux_thunk_1, promise_middleware_1, logger_1) {
    function configureStore(initialState) {
        return redux_1.createStore(reducers_1.default, initialState, redux_devtools_1.DevTools.instrument());
    }
    exports.configureStore = configureStore;
    var persistState = require('redux-localstorage');
    function configureStore(initialState) {
        var store = redux_1.createStore(reducers_1.default, initialState, compose(applyMiddleware.apply(void 0, _getMiddleware()), persistState('session', _getStorageConfig()), __DEV__ && environment.devToolsExtension ?
            environment.devToolsExtension() :
            function (f) { return f; }));
        _enableHotLoader(store);
        return store;
    }
    function _getMiddleware() {
        var middleware = [
            routerMiddleware(browserHistory),
            promise_middleware_1.default,
            redux_thunk_1.default,
        ];
        if (__DEV__) {
            middleware = middleware.concat([logger_1.default]);
        }
        return middleware;
    }
    var environment = window || this;
    function _enableHotLoader(store) {
        if (!__DEV__) {
            return;
        }
        var hot = module.hot, as = any;
        if (hot) {
            hot.accept('../reducers', function () {
                var nextRootReducer = require('../reducers');
                store.replaceReducer(nextRootReducer);
            });
        }
    }
});
//# sourceMappingURL=index.js.map