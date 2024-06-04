import {ICurrent} from "./current.model";
import {IForecast} from "./forecast.model";
import {ILocation} from "./location.model";

export interface IForecastWeather {
    current: ICurrent;
    forecast: IForecast;
    location: ILocation;
}