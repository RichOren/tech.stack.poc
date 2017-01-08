import {Action} from '../config/action';
export const FETCH_WEATHER = "FETCH_WEATHER";
export type FETCH_WEATHER = {id:number};

export const CANCEL_FETCH_WEATHER = "CANCEL_FETCH_WEATHER";
export type CANCEL_FETCH_WEATHER = {id:number};

export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export type FETCH_WEATHER_SUCCESS = {id:number, weather:any};

export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";
export type FETCH_WEATHER_ERROR = {id:number, error:any};

let id = 1;
export function createFetchWeatherAction():Action<FETCH_WEATHER>{
    return {
        type: FETCH_WEATHER,
        payload:{
            id: id++
        }
    }
}

export function createCancelFetchWeatherAction(requestId:number):Action<CANCEL_FETCH_WEATHER>{
    return {
        type:CANCEL_FETCH_WEATHER,
        payload:{
            id:requestId
        }
    }
}

export function createFetchWeatherSuccessAction(requestId:number, weather:any):Action<FETCH_WEATHER_SUCCESS>{
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload:{
            id:requestId,
            weather:weather
        }
    }
}

export function createFetchWeatherErrorAction(requestId:number, error:any):Action<FETCH_WEATHER_ERROR>{
    return {
        type: FETCH_WEATHER_ERROR,
        payload:{
            id:requestId,
            error:error
        }
    }
}