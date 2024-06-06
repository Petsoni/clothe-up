import express from "express";
import {WeatherService} from "../service/weather-service";

const weatherService = new WeatherService();
const router = express.Router();

/**
 * @Description
 * Get current weather for location
 */
router.get("/weather", (req, res) => {
    const {location} = req.query as {location: string};
    console.log(location);
    weatherService.getWeatherForLocation(location).then((weather) => {
        res.send(weather);
    }).catch((error) => {
        res.status(500).send(error);
    });
});

export {router};