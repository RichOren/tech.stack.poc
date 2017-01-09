import {Action} from '../config/action';
import {SEND_MESSAGE} from './test.action';
import {handleActions} from 'redux-actions';
import * as Immutable from 'immutable';

const name = "test";

const defaultState = Immutable.fromJS({
    messages:[]
});

const reducer = handleActions({
    [SEND_MESSAGE]: (state, action: Action<SEND_MESSAGE>) => {
        return state.updateIn(['messages'], messages => messages.push({
                id: action.payload.id,
                message: action.payload.message
            })
        )
    }
},defaultState);

export default {
    reducer:reducer,
    name: name
};