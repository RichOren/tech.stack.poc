import * as React from 'react';

export class About extends React.Component<{},{}> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <section>
                <h1>About</h1>
                <p>This is a starter project to get you up and running quickly with react!</p>
            </section>
        );
    }
}
