import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../products/Pizza";
import {PizzaIngredientFactory} from "../factory/PizzaIngredientFactory";
import {NYPizzaIngredientFactory} from "../factory/NYPizzaIngredientFactory";
import {CheesePizza} from "../products/CheesePizza";

export class NYPizzaStore extends PizzaStore {
    protected createPizza(type: string): Pizza {
        let pizza: Pizza;

        // 뉴욕 지점에 맞는 재료를 생성
        const ingredientFactory: PizzaIngredientFactory =
            new NYPizzaIngredientFactory(); // [cite: 1249]

        if (type === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza"); // [cite: 1249]
        } // else if 또다른 피자
        else {
            throw new Error("Unknown pizza type");
        }

        return pizza;
    }
}