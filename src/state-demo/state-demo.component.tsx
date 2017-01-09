import * as React from 'react';
import './state-demo.component.scss';
import {TypedRecord} from 'typed-immutable-record';


interface StateDemoProps {
    sendMessage:(message:string)=>void;
    messages:Array<{id:number, message:string}>
}

interface IAnimal {
    type: string;
    age: number;
}

interface IAnimalRecord extends TypedRecord<IAnimalRecord>, IAnimal {}
import {makeTypedFactory} from 'typed-immutable-record';

/*
 create a plain javascript object that meets the requirements of the IAnimal interface
 and represents the default values of the Immutable.Record
 */
const defaultAnimal = {
    type: null,
    age: 0
};

/*
 make the factory to enable the generation of animal records
 */
const AnimalFactory = makeTypedFactory<IAnimal, IAnimalRecord>(defaultAnimal);
const cat = {
    type: 'Cat',
    age: 9
};

const catRecord = AnimalFactory(cat);
const dogRecord:IAnimal = catRecord.set('type', 'Dog');
console.log(dogRecord.type); // 'Dog'
console.log(dogRecord.age); // 9


export class StateDemo extends React.Component<StateDemoProps,{message:string}> {
    constructor(public props){
        super(props);
        this.state = {message: "I did a thing!"};
    }

    public sendMessage(){
        this.props.sendMessage(this.state.message);
    }
    render() {
        return (
            <section>
                <p>State Params: {this.props.params.stateParam}</p>
                <p>Redux state demo</p>
                <div className="message-controls">
                    <input className="message-input" type="text" value={this.state.message} onChange={(event:any)=>this.setState({message:event.target.value})}/>
                    <button className="button button-send" onClick={()=>this.sendMessage()}>Send Message</button>
                </div>
                <section className="messages">
                {
                    this.props.messages.map((message, index)=>{
                        return (
                            <div className="message-card" key={index}><span className="message">{message.message}</span><span className="message-id">message #{message.id}</span></div>
                        );
                    })
                }
                </section>
            </section>
        );
    }
}
