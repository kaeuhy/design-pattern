import {Observer, Subject} from "./interfaces";

export class WeatherData implements Subject {
    private observers: Observer[] = [];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    public registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    public removeObserver(o: Observer): void {
        const index = this.observers.indexOf(o);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }

    // pull - 옵저버들에게 알림을 보낼 때 데이터를 인자로 넘기지 않음
    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    public measurementsChanged(): void {
        this.notifyObservers();
    }

    public setMeasurements(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    // pull - 옵저버가 데이터를 가져갈 수 있도록 Getter 메서드를 제공해야함
    public getTemperature(): number {
        return this.temperature;
    }

    public getHumidity(): number {
        return this.humidity;
    }

    public getPressure(): number {
        return this.pressure;
    }
}