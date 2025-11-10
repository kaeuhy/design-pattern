// 실제로 만들어지는 구체적인 시카고 스타일 피자
import {Pizza} from "./Pizza";

export class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        // 시카고 스타일 속성을 인자로 넣어 부모 클래스에게 전달합니다.
        super(
            "Chicago Style Deep Dish Cheese Pizza",
            "Extra Thick Crust Dough",
            "Plum Tomato Sauce"
        );

        this.toppings.push("Shredded Mozzarella Cheese");
    }

    // 부모 클래스의 cut 메서드를 시카고 스타일의 방식으로 재정의합니다.
    cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}