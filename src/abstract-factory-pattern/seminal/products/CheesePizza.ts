import {PizzaIngredientFactory} from "../factory/PizzaIngredientFactory";
import {Pizza} from "./Pizza";

export class CheesePizza extends Pizza {
    private ingredientFactory: PizzaIngredientFactory;

    public constructor(factory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = factory;
    }

    public prepare(): void {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough(); //
        this.sauce = this.ingredientFactory.createSauce(); //
        this.cheese = this.ingredientFactory.createCheese(); //

        console.log(`  ... using ${this.dough.toString()}`);
        console.log(`  ... using ${this.sauce.toString()}`);
        console.log(`  ... using ${this.cheese.toString()}`);
    }
}