// 라이트 모드 제품군을 실제로 구현
// Button과 Alert 인터페이스 구현
import {Alert, Button} from "./interfaces";

export class LightButton implements Button {
    public display(): void {
        console.log("라이트 모드 버튼");
    }
}

export class LightAlert implements Alert {
    public display(): void {
        console.log("라이트 모드로 전환되었습니다.");
    }
}