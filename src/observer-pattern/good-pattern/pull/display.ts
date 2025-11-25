import { Observer, DisplayElement, Subject } from "./interfaces";
import { WeatherData } from "./WeatherData";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private weatherData: WeatherData;
    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(): void {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.display();
    }

    public display(): void {
        console.log(`[Pull 방식] 현재 상태: 온도 ${this.temperature}F, 습도 ${this.humidity}%`);
    }
}