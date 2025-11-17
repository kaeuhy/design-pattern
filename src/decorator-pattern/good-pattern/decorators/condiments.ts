// CondimentDecorator를 상속받는 실제 첨가물 클래스
// 음료에 동적으로 추가할 실제 기능 또는 책임을 구현합니다.
import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "../components/Beverage";

// Mocha 첨가물
export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    public cost(): number {
        let cost = this.beverage.cost();
        const size = this.getSize();

        if (size === "TALL") {
            cost += 0.2;
        } else if (size === "GRANDE") {
            cost += 0.25;
        } else if (size === "VENTI") {
            cost += 0.3;
        }

        return cost;
    }
}

// Whip 첨가물
export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    public cost(): number {
        let cost = this.beverage.cost();
        const size = this.getSize();

        if (size === "TALL") {
            cost += 0.1;
        } else if (size === "GRANDE") {
            cost += 0.15;
        } else if (size === "VENTI") {
            cost += 0.2;
        }
        return cost;
    }
}

// Soy 첨가물
export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    public cost(): number {
        let cost = this.beverage.cost();
        const size = this.getSize();

        if (size === "TALL") {
            cost += 0.15;
        } else if (size === "GRANDE") {
            cost += 0.2;
        } else if (size === "VENTI") {
            cost += 0.25;
        }
        return cost;
    }
}