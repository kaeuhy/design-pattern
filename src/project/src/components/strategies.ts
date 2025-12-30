import type {userstate} from "../types/types.ts";
import {FocusContextData, ModeStrategy} from "../interfaces/StateInterface";


export class FocusModeStrategy implements ModeStrategy {
    public action(context: FocusContextData): userstate {
        const timeDiff = context.timeDiff;

        // FOCUSE 모드
        if (timeDiff <= 1000) {
            return "FOCUSED";
        }

        // DISTRACTED 모드
        if (timeDiff >= 10000) {
            return "DISTRACTED";
        }

        // NORMAL 모드
        if (timeDiff > 1000 && timeDiff < 10000) {
            return "NORMAL";
        }

        // 예외 처리
        return "ERROR";
    }
}