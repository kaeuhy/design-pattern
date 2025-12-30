import {StateObserver} from "../interfaces/StateInterface";

// 상태 변경 옵저버
export const updateObserver: StateObserver = {
    update(newState) {
        console.log(`상태 변경: ${newState}`);
    }
};

// 현재 상태 옵저버
export const nowStateObserver: StateObserver = {
    update(newState) {
        console.log(`현재 상태: ${newState}\n`);
    }
};