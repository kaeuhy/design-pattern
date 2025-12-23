import type {userstate} from "../types/types.ts";

// 마지막 입력 시간 인터페이스
export interface FocusContextData {
    LastInputTime: number;
}

// 사용자의 상태에 따른 전략 인터페이스를 정의합니다.
export interface ModeStrategy {
    action(context: FocusContextData): userstate;
}