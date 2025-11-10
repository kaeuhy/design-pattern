// Application을 상속받아 추상 메서드를 구현하여 다크 모드 제품 생성
import {Application} from "./Application";
import {UIElement} from "../ui/UIElement";
import {DarkAlert, DarkButton} from "../ui/dark-theme";

export class DarkApplication extends Application {
    // 추상 메서드 구현
    protected createUIElement(type: "button" | "alert"): UIElement {
        if (type === 'button') {
            return new DarkButton();
        } else if (type === 'alert') {
            return new DarkAlert();
        } else {
            throw new Error("Unknown element type");
        }
    }
}