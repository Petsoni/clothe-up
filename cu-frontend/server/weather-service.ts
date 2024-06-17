import {environmentDev} from "~/environments/environment-dev";

/**
 * @Description
 * Fetches the weather data for a given location
 * @param location
 */
export async function getWeather(location: string) {
    let response = await fetch(`${environmentDev.api}/weather?location=${location}`);
    return await response.json();
}