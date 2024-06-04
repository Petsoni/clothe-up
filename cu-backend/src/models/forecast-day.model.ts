import {IDay} from "./day.model";
import {IHour} from "./hour.model";

export interface IForecastDay {
    date: string;
    date_epoch: number;
    day: IDay;
    hour: IHour[];
}