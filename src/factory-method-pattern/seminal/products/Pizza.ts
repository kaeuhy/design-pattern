// 제품의 인터페이스 역할을 하는 추상 클래스
export abstract class Pizza {

    protected constructor(protected name: string, protected dough: string, protected sauce: string, protected toppings: string[] = []) {
        this.name = name;
        this.dough = dough;
        this.sauce = sauce;
        this.toppings = toppings;
    }

    // 공통 로직인 피자 주문
    prepare(): void {
        console.log(`Preparing ${this.name}`);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");
        this.toppings.forEach(topping => console.log(`  ${topping}`));
    }

    bake(): void {
        console.log("Bake for 25 minutes at 350");
    }

    cut(): void {
        console.log("Cutting the pizza into diagonal slices");
    }

    box(): void {
        console.log("Place pizza in official PizzaStore box");
    }

    public getName(): string {
        return this.name;
    }
}