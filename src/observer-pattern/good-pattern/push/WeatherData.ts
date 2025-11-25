// Subject 인터페이스를 구현한 실제 데이터 관리 클래스
import {Subject, Observer} from "./interfaces";

export class WeatherData implements Subject {
    // WeatherData는 구체적인 디스플레이가 아닌 Observer 인터페이스 목록만 관리
    private observers: Observer[] = [];

    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    public registerObserver(o: Observer): void {
        this.observers.push(o);
        console.log("✅ 옵저버가 등록되었습니다.");
    }

    public removeObserver(o: Observer): void {
        const index = this.observers.indexOf(o);
        if (index >= 0) {
            this.observers.splice(index, 1);
            console.log("❌ 옵저버가 제거되었습니다.");
        }
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    // 데이터 갱신 호출 메서드
    public measurementsChanged(): void {
        this.notifyObservers();
    }

    // 데이터 설정용 메서드
    public setMeasurements(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;

        console.log(`\n[갱신] 새로운 데이터 수신 - 온도: ${temp}, 습도: ${humidity}, 기압: ${pressure}`);
        this.measurementsChanged();
    }
}