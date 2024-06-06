import {IForecastWeather} from "../models/forecast-weather.model";
import {options} from "../config/weather-api-config";

export class WeatherService {

    async getWeatherForLocation(query: string): Promise<IForecastWeather> {
        let f = fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}`, options)
        let response = await f;
        if (response.status >= 400) {
            return Promise.reject(response);
        } else {
            return response.json();
        }
    }

}
