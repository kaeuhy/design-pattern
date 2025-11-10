// 추상  팩토리의 클라이언트로 UIFactory 인터페이스에만 의존
import {UIFactory} from "./factory/UIFactory";
import {Alert, Button} from "./ui/interfaces";

export class Application {
    private factory: UIFactory;
    private button!: Button;
    private alert!: Alert;

    // 추상 팩토리 주입
    public constructor(factory: UIFactory) {
        this.factory = factory;
    }

    // 팩토리를 사용해 실제 제품 생성
    public createUI(): void {
        console.log("UI를 생성합니다");
        this.button = this.factory.createButton();
        this.alert = this.factory.createAlert();
    }

    // 생성된 제품 사용
    public displayUI(): void {
        this.button.display();
        this.alert.display();
    }
}