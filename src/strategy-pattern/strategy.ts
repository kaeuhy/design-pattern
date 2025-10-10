// 전략 인터페이스
// 모든 전략 클래스가 구현해야 할 인터페이스를 정의합니다.
export interface ValidationStrategy {
    validate(value: string): { isValid: boolean; message: string };
}