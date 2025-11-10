import {Pizza} from "../products/Pizza";

export abstract class PizzaStore {
    public orderPizza(type: string): Pizza {
        const pizza = this.createPizza(type);
        console.log(`--- Making a ${pizza.getName()} ---`);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    // 아직 createPizza 구현 안함, 추상 메서드임
    protected abstract createPizza(type: string): Pizza;
}