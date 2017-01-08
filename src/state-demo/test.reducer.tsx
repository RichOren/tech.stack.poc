import {Action} from '../config/action';
import {SEND_MESSAGE} from './test.action';
import {handleActions} from 'redux-actions';
const name = "test";
const defaultState = {
    messages:[]
};
const reducer = handleActions({
    [SEND_MESSAGE]: (state, action: Action<SEND_MESSAGE>) => {
        return Object.assign({}, state,{
            messages:[
                ...state.messages,
                {
                    id: action.payload.id,
                    message: action.payload.message
                }
            ]
        });
    }
},defaultState);

export default {
    reducer:reducer,
    name: name
};