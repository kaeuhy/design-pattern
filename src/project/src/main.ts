import { FocusManager } from "./components/FocusManager";
import { FocusModeStrategy } from "./components/strategies";
import {nowStateObserver, updateObserver} from "./components/Display";

const focusManager = new FocusManager();
const strategy = new FocusModeStrategy();

focusManager.register(updateObserver);
focusManager.register(nowStateObserver);

// 상태 확인 함수
const checkStatus = (delay: number) => {
    setTimeout(() => {
        const state = strategy.action({ timeDiff: delay });
        focusManager.notify(state);
    }, delay);
};

checkStatus(500);
checkStatus(5000);
checkStatus(12000);

// 모든 옵저버 제거
setTimeout(() => {
    focusManager.delete(updateObserver);
    focusManager.delete(nowStateObserver);
    console.log("모든 옵저버 제거됨");
}, 15000);