import * as React from 'react';

interface WeatherProps {
    fetchWeather:()=>void;
    weather:any
}

export class Weather extends React.Component<WeatherProps,{weather:any}> {
    constructor(public props){
        super(props);
        this.state = {weather: {}};
    }

    public fetchWeather(){
        this.props.fetchWeather();
    }
    render() {
        return (
            <section>
                <p>Weather in Draper UT</p>
                <div >
                    <button className="button button-send" onClick={()=>this.fetchWeather()}>Fetch Weather</button>
                </div>
                <section>
                    {
                        JSON.stringify(this.props.weather)
                    }
                </section>
            </section>
        );
    }
}
