// 뉴욕 지점에 실제 재료들
import {Cheese, Dough, Sauce} from "./Interfaces";

export class ThinCrustDough implements Dough {
    toString = () => "Thin Crust Dough";
}

export class MarinaraSauce implements Sauce {
    toString = () => "Marinara Sauce";
}

export class ReggianoCheese implements Cheese {
    toString = () => "Reggiano Cheese";
}

