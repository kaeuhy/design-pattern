// 다크 모드의 구상 제품들을 만듭니다.
import {UIElement} from "./UIElement";

export class DarkButton implements UIElement {
    public display(): void {
        console.log("다크 모드 버튼");
    }
}

export class DarkAlert implements UIElement {
    public display(): void {
        console.log("다크 모드로 전환되었습니다.");
    }
}