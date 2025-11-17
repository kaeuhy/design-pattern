// 모든 데코레이터의 공통 부모가 되는 추상 클래스
import {Beverage} from "../components/Beverage";
import {Size} from "../Size";

export abstract class CondimentDecorator extends Beverage {
    protected beverage: Beverage;

    protected constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public abstract getDescription(): string;

    public getSize(): Size {
        return this.beverage.getSize();
    }
}