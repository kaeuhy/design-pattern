import type {userstate} from "../types/types.ts";
import type {FocusContextData, ModeStrategy} from "../interfaces/UiInterface.ts";

export class FocusModeStrategy implements ModeStrategy {
    public action(context: FocusContextData): userstate {
        const currentTime = Date.now();
        const timeDiff = currentTime - context.LastInputTime;

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