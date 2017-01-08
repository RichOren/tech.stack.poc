import * as React from 'react';
import {connect} from 'react-redux';
import {SEND_MESSAGE, createSendMessageAction} from './test.action';

interface StateProps {
    messages: Array<{id:number, message:string}>;
}
interface DispatchProps {
    sendMessageAction;
}

type StateDemoProps = StateProps & DispatchProps;
function mapStateToProps(state) {
    return {
        messages: state.app.test.messages
    };
}
function mapDispatchToProps(dispatch) {
    return {
        sendMessageAction: (message: string) => {
            dispatch(createSendMessageAction(message));
        }
    };
}

@connect<StateProps,DispatchProps,any>(mapStateToProps, mapDispatchToProps)
export class StateDemoPage extends React.Component<StateDemoProps,any> {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h1>State Demo</h1>
                <main>
                    {
                        this.props.children && React.cloneElement(this.props.children, {
                            sendMessage: (message:string)=>this.props.sendMessageAction(message),
                            messages: this.props.messages
                        })
                    }
                </main>
            </section>
        );
    }
}
