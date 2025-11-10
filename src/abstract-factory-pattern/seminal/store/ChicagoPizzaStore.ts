import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../products/Pizza";
import {ChicagoPizzaIngredientFactory} from "../factory/ChicagoPizzaIngredientFactory";
import {PizzaIngredientFactory} from "../factory/PizzaIngredientFactory";
import {CheesePizza} from "../products/CheesePizza";

export class ChicagoPizzaStore extends PizzaStore {
    protected createPizza(type: string): Pizza {
        let pizza: Pizza;

        const ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory();

        if (type === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("Chicago Style Deep Dish Cheese Pizza");
        } // else if 다른 피자
        else {
            throw new Error("Unknown pizza type");
        }
        return pizza;

    }
}