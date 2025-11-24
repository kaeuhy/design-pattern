// Subject와 Observer 인터페이스 정의
// 모든 디스플레이 장비는 해당 인터페이스를 구현해야함
export interface Observer {
    update(temp: number, humidity: number, pressure: number): void;
}

// 옵저버를 등록, 제거하고 알림을 보내는 역할을 함
export interface Subject {
    registerObserver(o: Observer): void; // 구독 신청
    removeObserver(o: Observer): void;   // 구독 해지
    notifyObservers(): void;             // 알림
}

// 화면에 데이터를 보여주는 인터페이스
export interface DisplayElement {
    display(): void;
}