import * as React from 'react';
import {Link} from 'react-router';
import './app.component.scss';
import {DevTools} from "./config/redux-dev.component";

export class App extends React.Component<{},{}> {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <main>
                <nav className="site-nav">
                    <Link className="nav-item" activeClassName="nav-item-active" to="/">Hello World</Link>
                    <Link className="nav-item" activeClassName="nav-item-active" to="/state/123">State Demo</Link>
                    <Link className="nav-item" activeClassName="nav-item-active" to="/weather/forecast">Weather</Link>
                    <Link className="nav-item" activeClassName="nav-item-active" to="/about">About</Link>
                </nav>
                <article>
                    {this.props.children}
                </article>
                <DevTools/>
            </main>
        );
    }
}
