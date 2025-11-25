import { WeatherData } from "./WeatherData";
import {CurrentConditionsDisplay} from "./display";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);