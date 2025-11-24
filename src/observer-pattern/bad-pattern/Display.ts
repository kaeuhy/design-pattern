// 기상 정보를 화면에 출력하는 Display 클래스들
// 각 클래스는 update 메서드를 통해 WeatherData로부터 전달받은 데이터를 출력

// 현재 날씨 정보를 보여주는 디스플레이
export class CurrentConditionsDisplay {
    update(temp: number, humidity: number, pressure: number) {
        console.log(
            "[CurrentConditionsDisplay] 현재 상태: " +
            temp +
            "F, 습도 " +
            humidity +
            "%"
        );
    }
}

// 전체 평균, 최고, 최저 등을 보여주는 통계 디스플레이
export class StatisticsDisplay {
    update(temp: number, humidity: number, pressure: number) {
        console.log("[StatisticsDisplay] 통계 업데이트: temp = " + temp);
    }
}

// 기압을 기반으로 간단한 날씨 예측을 하는 디스플레이
export class ForecastDisplay {
    update(temp: number, humidity: number, pressure: number) {
        console.log("[ForecastDisplay] 기압 기반 예보 업데이트: pressure = " + pressure);
    }
}