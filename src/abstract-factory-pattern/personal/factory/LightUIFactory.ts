// 라이트 모드 제품군 인스턴스를 생성하는 실제 팩토리 클래스
import {UIFactory} from "./UIFactory";
import {Alert, Button} from "../ui/interfaces";
import {LightAlert, LightButton} from "../ui/light-theme";

export class LightUIFactory implements UIFactory {
    public createButton(): Button {
        return new LightButton();
    }

    public createAlert(): Alert {
        return new LightAlert();
    }
}