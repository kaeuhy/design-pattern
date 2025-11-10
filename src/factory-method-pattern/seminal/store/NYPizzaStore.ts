// 어떤 피자를 만들지 구체적으로 결정
import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../products/Pizza";
import {NYStyleCheesePizza} from "../products/NYStyleCheesePizza";

export class NYPizzaStore extends PizzaStore {
    protected createPizza(item: string): Pizza {
        if (item === "cheese") {
            return new NYStyleCheesePizza();
        } // else if 다른 스타일의 피자 ...
        else {
            throw new Error("Unknown pizza type");
        }
    }
}