import {StateObserver, StateSubject} from "../interfaces/StateInterface";
import type {userstate} from "../types/types.ts";

export class FocusManager implements StateSubject {
    private observers: StateObserver[] = [];

    // 등록
    public register(observer: StateObserver): void {
        this.observers.push(observer);
    }

    // 삭제
    public delete(observer: StateObserver): void {
        this.observers = this.observers.filter(observers => observers !== observer);
    }

    // 알림
    public notify(newState: userstate): void {
        this.observers.forEach(observer => observer.update(newState));
    }
}