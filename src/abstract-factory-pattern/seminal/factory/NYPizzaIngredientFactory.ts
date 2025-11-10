// 뉴욕 지점 제품 묶음에 맞는 재료를 생성하는 실제 공장
import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {Cheese, Dough, Sauce} from "../products/ingredients/Interfaces";
import {MarinaraSauce, ReggianoCheese, ThinCrustDough} from "../products/ingredients/NYIngredients";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThinCrustDough();
    }

    public createSauce(): Sauce {
        return new MarinaraSauce();
    }

    public createCheese(): Cheese {
        return new ReggianoCheese();
    }
}