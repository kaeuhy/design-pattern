// 시카고 지점에 실제 재료들
import {Cheese, Dough, Sauce} from "./Interfaces";

export class ThickCrustDough implements Dough {
    toString = () => "Extra Thick Crust Dough";
}

export class PlumTomatoSauce implements Sauce {
    toString = () => "Plum Tomato Sauce";
}

export class MozzarellaCheese implements Cheese {
    toString = () => "Shredded Mozzarella Cheese";
}