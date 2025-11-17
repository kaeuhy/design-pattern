// 데코레이터로 감싸질 실제 원본 객체
import {Beverage} from "./Beverage";

// 다크 로스팅
export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "다크 로스팅 커피";
    }

    public cost(): number {
        return 0.99;
    }
}

// 하우스 블렌드
export class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "하우스 블렌드 커피";
    }

    public cost(): number {
        return 0.89;
    }
}

// 에스프레소
export class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "에스프레소 커피";
    }

    public cost(): number {
        return 1.99;
    }
}