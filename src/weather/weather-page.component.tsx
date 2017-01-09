import * as React from 'react';
import {connect} from 'react-redux';
import {createFetchWeatherAction} from "./fetch-weather.action";

interface StateProps {
    weather: any;
}
interface DispatchProps {
    sendFetchWeatherAction;
}

type WeatherPageProps = StateProps & DispatchProps;
function mapStateToProps(state) {
    return {
        weather: state.getIn(['app','weather'])
    };
}
function mapDispatchToProps(dispatch) {
    return {
        sendFetchWeatherAction: () => {
            dispatch(createFetchWeatherAction());
        }
    };
}

@connect<StateProps,DispatchProps,any>(mapStateToProps, mapDispatchToProps)
export class WeatherPage extends React.Component<WeatherPageProps,any> {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h1>Weather</h1>
                <main>
                    {
                        this.props.children && React.cloneElement(this.props.children, {
                            fetchWeather: ()=>this.props.sendFetchWeatherAction(),
                            weather: this.props.weather
                        })
                    }
                </main>
            </section>
        );
    }
}
