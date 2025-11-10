// 버튼과 알림 제품의 인터페이스를 정의
export interface Button {
    display(): void;
}

export interface Alert {
    display(): void;
}