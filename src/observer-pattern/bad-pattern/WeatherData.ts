// 기상 센서로부터 들어오는 데이터를 저장, 값이 바뀔 때마다 디스플레이를 직접 update로  호출
import {CurrentConditionsDisplay, ForecastDisplay, StatisticsDisplay} from "./Display";

export class WeatherData {
    // 센서로부터 전달되는 현재 기상 정보
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    public currentConditionsDisplay: CurrentConditionsDisplay;
    public statisticsDisplay: StatisticsDisplay;
    public forecastDisplay: ForecastDisplay;

    // WeatherData 클래스가 직접 객체를 생성
    constructor() {
        this.currentConditionsDisplay = new CurrentConditionsDisplay();
        this.statisticsDisplay = new StatisticsDisplay();
        this.forecastDisplay = new ForecastDisplay();
    }

    // 온도를 가져오는 getter
    public getTemperature(): number {
        return this.temperature;
    }

    // 습도를 가져오는 getter
    public getHumidity(): number {
        return this.humidity;
    }

    // 기압를 가져오는 getter
    public getPressure(): number {
        return this.pressure;
    }

    // 기상 데이터가 갱신되면 호출되는 메서드
    // 현재 데이터를 가져와 각 Display 클래스의 update 메서드를 직접 호출
    public measurementsChanged(): void {
        const temp = this.getTemperature();
        const humidity = this.getHumidity();
        const pressure = this.getPressure();

        // 직접 호출 -> 강한 결합
        this.currentConditionsDisplay.update(temp, humidity, pressure);
        this.statisticsDisplay.update(temp, humidity, pressure);
        this.forecastDisplay.update(temp, humidity, pressure);
    }

    // 센서 데이터가 갱신될 때 호출되는 메서드
    public setMeasurements(temp: number, humidity: number, pressure: number) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;

        this.measurementsChanged();
    }
}