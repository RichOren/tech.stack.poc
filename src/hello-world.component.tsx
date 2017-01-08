import * as React from 'react';

export class HelloWorld extends React.Component<{},{}> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h1>Hello, World!</h1>
        );
    }
}
