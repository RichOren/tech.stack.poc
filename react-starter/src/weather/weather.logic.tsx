//wunderground key 8ceaa995f3de652b
import {createLogic} from 'redux-logic';
import axios from 'axios';
import {
    FETCH_WEATHER, CANCEL_FETCH_WEATHER, createFetchWeatherSuccessAction,
    createFetchWeatherErrorAction
} from "./fetch-weather.action";

export default createLogic({
    type: FETCH_WEATHER,
    cancelType: CANCEL_FETCH_WEATHER,
    latest: true,
    process({getState, action}, dispatch) {
        axios.get('http://api.wunderground.com/api/8ceaa995f3de652b/forecast/geolookup/conditions/q/UT/Draper.json')
            .then(resp => resp.data)
            .then(weather => dispatch(createFetchWeatherSuccessAction(action.payload.id, weather)))
            .catch(err => {
                console.error(err); // log since could be render err
                dispatch(createFetchWeatherErrorAction(action.payload.id, err))
            });

    }
});