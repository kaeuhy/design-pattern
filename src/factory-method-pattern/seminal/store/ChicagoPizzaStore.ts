// 어떤 피자를 만들지 구체적으로 결정
import {ChicagoStyleCheesePizza} from "../products/ChicagoStyleCheesePizza";
import {Pizza} from "../products/Pizza";
import {PizzaStore} from "./PizzaStore";

export class ChicagoPizzaStore extends PizzaStore {
    protected createPizza(item: string): Pizza {
        if (item === "cheese") {
            return new ChicagoStyleCheesePizza();
        } // else if 다른 스타일의 피자 ...
        else {
            throw new Error("Unknown pizza type");
        }
    }
}