// Application을 상속받아 추상 메서드를 구현하여 라이트 모드 제품 생성
import {Application} from "./Application";
import {UIElement} from "../ui/UIElement";
import {LightAlert, LightButton} from "../ui/light-theme";

export class LightApplication extends Application {
    // 추상 메서드 구현
    protected createUIElement(type: "button" | "alert"): UIElement {
        if (type === 'button') {
            return new LightButton();
        } else if (type === 'alert') {
            return new LightAlert();
        } else {
            throw new Error("Unknown element type");
        }
    }
}