import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './config/store';
import {App} from "./app.component";
import {About} from "./about.component";
import {StateDemoPage} from "./state-demo/state-demo-page.component";
import {StateDemo} from "./state-demo/state-demo.component";
import {HelloWorld} from "./hello-world.component";
import {NotFound} from "./not-found.component";
import {WeatherPage} from "./weather/weather-page.component";
import {Weather} from "./weather/weather.component";

const store = configureStore();
const createSelectLocationState = () => {
    let prevRoutingState, prevRoutingStateJS;
    return (state) => {
        const routingState = state.get('routing'); // or state.routing
        if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
            prevRoutingState = routingState;
            prevRoutingStateJS = routingState.toJS();
        }
        return prevRoutingStateJS;
    };
};
const history = syncHistoryWithStore(browserHistory,store,{
    selectLocationState: createSelectLocationState()
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={App}>
                <Route path="/about" component={About}/>
                <Route path="/state" component={StateDemoPage}>
                    <Route path="/state/:stateParam" component={StateDemo}/>
                </Route>
                <Route path="/weather" component={WeatherPage}>
                    <Route path="/weather/forecast" component={Weather}/>
                </Route>
                <Route path="/" component={HelloWorld}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
