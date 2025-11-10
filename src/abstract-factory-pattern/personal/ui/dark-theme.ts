// 다크 모드 제품군을 실제로 구현
// Button과 Alert 인터페이스 구현
import {Alert, Button} from "./interfaces";

export class DarkButton implements Button {
    public display(): void {
        console.log("다크 모드 버튼");
    }
}

export class DarkAlert implements Alert {
    public display(): void {
        console.log("다크 모드로 전환되었습니다.");
    }
}