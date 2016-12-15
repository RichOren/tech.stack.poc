import {Action} from '../config/action';
export const SEND_MESSAGE = "SEND_MESSAGE";
export type SEND_MESSAGE = {id: number, message:string};

let id = 1;
export function createSendMessageAction(message:string):Action<SEND_MESSAGE>{
    return {
        type: SEND_MESSAGE,
        payload:{
            id: id++,
            message: message
        }
    }
}