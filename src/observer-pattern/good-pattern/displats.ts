// Observer 인터페이스를 구현한 구체적인 디스플레이
import {Observer, DisplayElement, Subject} from "./interfaces";

// 현재 온도와 습도를 보여주는 클래스
export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;

    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        // 객체 생성되자마자 자기 자신을 등록
        weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }

    public display(): void {
        console.log(`>> [현재 상태] 온도: ${this.temperature}F, 습도: ${this.humidity}%`);
    }
}

// 온도의 평균, 최고, 최저 값을 계산하는 클래스
export class StatisticsDisplay implements Observer, DisplayElement {
    private maxTemp: number = 0.0;
    private minTemp: number = 200;
    private tempSum: number = 0.0;
    private numReadings: number = 0;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.tempSum += temp;
        this.numReadings++;

        if (temp > this.maxTemp) {
            this.maxTemp = temp;
        }

        if (temp < this.minTemp) {
            this.minTemp = temp;
        }

        this.display();
    }

    public display(): void {
        const avg = this.tempSum / this.numReadings;
        console.log(`>> [통계] 평균/최고/최저 온도 = ${avg.toFixed(1)}/${this.maxTemp}/${this.minTemp}`);
    }
}

// 기압 변화를 보고 날씨를 예측하는 클래스
export class ForecastDisplay implements Observer, DisplayElement {
    private currentPressure: number = 29.92;
    private lastPressure: number = 0;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }

    public display(): void {
        let forecast = "";
        if (this.currentPressure > this.lastPressure) {
            forecast = "날씨가 좋아지고 있습니다!";
        } else if (this.currentPressure === this.lastPressure) {
            forecast = "지금과 비슷할 것 같습니다.";
        } else if (this.currentPressure < this.lastPressure) {
            forecast = "쌀쌀하며 비가 올 것 같습니다.";
        }
        console.log(`>> [예보] ${forecast}`);
    }
}