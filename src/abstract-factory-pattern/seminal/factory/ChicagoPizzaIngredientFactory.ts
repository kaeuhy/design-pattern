// 시카고 지점 제품 묶음에 맞는 재료를 생성하는 실제 공장
import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {Cheese, Dough, Sauce} from "../products/ingredients/Interfaces";
import {MozzarellaCheese, PlumTomatoSauce, ThickCrustDough} from "../products/ingredients/ChicagoIngredients";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThickCrustDough();
    }

    public createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    public createCheese(): Cheese {
        return new MozzarellaCheese();
    }
}