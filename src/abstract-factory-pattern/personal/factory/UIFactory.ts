// 추상 팩토리 부분으로 UI 제품군을 생성하는 팩토리의 인터페이스
import {Alert, Button} from "../ui/interfaces";

export interface UIFactory {
    createButton(): Button;
    createAlert(): Alert;
}