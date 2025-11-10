// 팩토리 메서드 패턴의 제품이자 추상 팩토리 패턴의 클라이언트
import {Cheese, Dough, Sauce} from "./ingredients/Interfaces";

export abstract class Pizza {

    // 추상 인터페이스에 의존
    protected name!: string;
    protected dough!: Dough;
    protected sauce!: Sauce;
    protected cheese!: Cheese;

    // 재료 준비 추상 메서드
    public abstract prepare(): void;

    bake(): void {
        console.log("Bake for 25 minutes at 350");
    }

    cut(): void {
        console.log("Cutting the pizza into diagonal slices");
    }

    box(): void {
        console.log("Place pizza in official PizzaStore box");
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}