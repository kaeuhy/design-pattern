import {Pizza} from "../products/Pizza";

export abstract class PizzaStore {
    public orderPizza(type: string): Pizza {
        const pizza = this.createPizza(type);
        console.log(` Making a ${pizza.getName()} `);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    protected abstract createPizza(type: string): Pizza;
}