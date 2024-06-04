import {IForecastWeather} from "../models/forecast-weather.model";
import {options} from "../config/weather-api-config";

export function getWeatherForLocation(query: string): Promise<IForecastWeather> {
    console.log('callForecastApi');
    let f = fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}`, options)
    return f.then(response => {
        if (response.status >= 400) {
            return Promise.reject(response);
        } else {
            return response.json();
        }
    });
}