import * as React from 'react';
import {Link} from "react-router";

export class NotFound extends React.Component<{},{}> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <section>
                <h1>Not Found</h1>
                <Link to="/">Home</Link>
            </section>
        );
    }
}
