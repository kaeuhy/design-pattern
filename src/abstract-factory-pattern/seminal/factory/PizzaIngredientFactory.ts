// 연관된 재료 묶음을 생성하기 위한 인터페이스
import {Cheese, Dough, Sauce} from "../products/ingredients/Interfaces";

export interface PizzaIngredientFactory {
    createDough(): Dough;

    createSauce(): Sauce;

    createCheese(): Cheese;
}