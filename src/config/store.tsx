import * as Immutable from 'immutable';
import {combineReducers} from "redux-immutable";
import {createStore, applyMiddleware, compose, Middleware} from 'redux';
import {browserHistory} from "react-router";
import {routerMiddleware} from 'react-router-redux';
import { createLogicMiddleware } from 'redux-logic';
import {DevTools} from "./redux-dev.component";
import {Reducer} from "./reducer";
import routerReducer from "./router/router-reducer";

const rootReducer = combineReducers(
    getReducers(require.context('../', true, /.*\.reducer\.tsx$/))
);

const rootLogic = getLogic(require.context('../',true,/.*\.logic\.tsx/));

const initialState = Immutable.Map();

export function configureStore() {
    const store = createStore(
        combineReducers({
            app: rootReducer,
            routing: routerReducer
        }),
        initialState,
        compose(
           applyMiddleware(...getMiddleware()),
           DevTools.instrument(),
        ));

    return store;
}

function getMiddleware(): Middleware[] {
    let middleware = [
        routerMiddleware(browserHistory),
        createLogicMiddleware(rootLogic,{})
    ];

    return middleware;
}

function getReducers(reducerContext) {
    return reducerContext.keys()
        .reduce((reducers, reducerFile) => {
            let reducer:Reducer = reducerContext(reducerFile).default;
            return {
                ...reducers,
                [reducer.name]:reducer.reducer
            }
        }, {});
}

function getLogic(logicContext){
    return logicContext.keys()
        .map((logic)=>{
            return logicContext(logic).default;
        });
}