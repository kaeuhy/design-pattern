// 다크 모드 제품군 인스턴스를 생성하는 실제 팩토리 클래스
import {UIFactory} from "./UIFactory";
import {Alert, Button} from "../ui/interfaces";
import {DarkAlert, DarkButton} from "../ui/dark-theme";

export class DarkUIFactory implements UIFactory {
    public createButton(): Button {
        return new DarkButton();
    }

    public createAlert(): Alert {
        return new DarkAlert();
    }
}