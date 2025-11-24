import {WeatherData} from "./WeatherData";
import {CurrentConditionsDisplay, ForecastDisplay, StatisticsDisplay} from "./displats";

console.log("=== 옵저버 패턴 시뮬레이션 시작 ===");

const weatherData = new WeatherData();

// 옵저버 생성 및 자동 구독
const currentDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);

// 데이터가 변경될 때마다 모든 디스플레이가 자동으로 갱신
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);

// 현재 상태 디스플레이가 구독을 해지
console.log("\n--- 현재 상태 디스플레이 구독 해지 ---");
weatherData.removeObserver(currentDisplay);

// 데이터 변경
weatherData.setMeasurements(65, 50, 28.4);