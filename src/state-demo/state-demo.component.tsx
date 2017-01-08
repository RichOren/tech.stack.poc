import * as React from 'react';
import './state-demo.component.scss';

interface StateDemoProps {
    sendMessage:(message:string)=>void;
    messages:Array<{id:number, message:string}>
}

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
                    this.props.messages.map((message)=>{
                        return (
                            <div className="message-card"><span className="message">{message.message}</span><span className="message-id">message #{message.id}</span></div>
                        );
                    })
                }
                </section>
            </section>
        );
    }
}
