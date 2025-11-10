// UI를 생성하는 render라는 공통 로직을 가집니다.
import {UIElement} from "../ui/UIElement";

export abstract class Application {
    public renderElement(type: 'button' | 'alert'): void {
        // this의 type에 따라 라이트 혹은 다크 모드
        const element: UIElement = this.createUIElement(type);

        // 공통 로직인 요소 렌더링
        console.log("요소를 렌더링합니다:");
        element.display();
    }

    // render 내부에서 호출되는 추상 메서드
    protected abstract createUIElement(type: 'button' | 'alert'): UIElement;
}