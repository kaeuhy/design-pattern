// 데코레이터가 Size 상태에 따라 다른 가격을 반환합니다.
export type Size = "TALL" | "GRANDE" | "VENTI";

// 기본 사이즈를 상수로 정의합니다.
export const DEFAULT_SIZE: Size = "TALL";