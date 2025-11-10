// 라이트 모드의 구상 제품들을 만듭니다.
import {UIElement} from "./UIElement";

export class LightButton implements UIElement {
    public display(): void {
        console.log("라이트 모드 버튼");
    }
}

export class LightAlert implements UIElement {
    public display(): void {
        console.log("라이트 모드로 전환되었습니다.");
    }
}