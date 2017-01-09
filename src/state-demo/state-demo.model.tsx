import {TypedRecord, makeTypedFactory} from 'typed-immutable-record';

interface StateDemoProps {
    sendMessage:(message:string)=>void;
    messages:Array<{id:number, message:string}>
}

interface IMessage {
    id: number;
    message: string;
}
interface IMessageRecord extends TypedRecord<IMessageRecord>, IMessage {}

const defaultMessage = {
    id: null,
    message: null
};

const MessageFactory = makeTypedFactory<IMessage, IMessageRecord>(defaultMessage);
