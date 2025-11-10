// 실제로 만들어지는 구체적인 뉴욕 스타일 피자
import {Pizza} from "./Pizza";

export class NYStyleCheesePizza extends Pizza {
    constructor() {
        // 뉴욕 스타일 속성을 인자로 넣어 부모 클래스에게 전달합니다.
        super(
            "NY Style Sauce and Cheese Pizza",
            "This Crust Dough",
            "Marinara Sauce",
        );

        this.toppings.push("Grated Reggiano Cheese");
    }
}