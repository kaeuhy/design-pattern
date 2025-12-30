import type {userstate} from "../types/types.ts";

// 전략 패턴 인터페이스
export interface FocusContextData {
    timeDiff: number;
}

// 사용자의 상태에 따른 전략 인터페이스를 정의합니다.
export interface ModeStrategy {
    action(context: FocusContextData): userstate;
}

// 옵저버 패턴 인터페이스
// 상태 변경
export interface StateObserver {
    update(newState: userstate): void;
}

export interface StateSubject {
    // 등록
    register(observer: StateObserver): void;

    // 제거
    delete(observer: StateObserver): void;

    // 알림
    notify(newState: userstate): void;

}