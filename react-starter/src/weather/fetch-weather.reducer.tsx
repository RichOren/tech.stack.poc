import {Action} from '../config/action';
import {handleActions} from 'redux-actions';
import {FETCH_WEATHER_SUCCESS} from "./fetch-weather.action";
const name = "weather";
const defaultState = {
    currentObservation:{},
    forecast:{}
};
const reducer = handleActions({
    [FETCH_WEATHER_SUCCESS]: (state, action: Action<FETCH_WEATHER_SUCCESS>) => {
        return Object.assign({}, state,{
            currentObservation:action.payload.weather.current_observation,
            forecast:action.payload.weather.forecast
        });
    }
},defaultState);

export default {
    reducer:reducer,
    name: name
};