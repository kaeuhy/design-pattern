import {Beverage} from "./Beverage";

export class FlawedHouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "하우스 블렌드 커피";
    }

    public cost(): number {
        // 기본 가격
        const HouseBlendCost = 0.89;

        // 기본 가격에 첨가물이 합쳐진 최종 가격
        const condimentCost = super.cost();

        return HouseBlendCost + super.cost();
    }
}