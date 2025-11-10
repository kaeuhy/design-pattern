// --- main.ts ---
import { PizzaStore } from "./store/PizzaStore";
import { NYPizzaStore } from "./store/NYPizzaStore";
import { ChicagoPizzaStore } from "./store/ChicagoPizzaStore";
import { Pizza } from "./products/Pizza";

// 1. 구상 생성자(PizzaStore) 인스턴스 생성
const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

// 2. 뉴욕 스토어에서 치즈 피자 주문
//    nyStore.orderPizza -> NYPizzaStore.createPizza -> new NYPizzaIngredientFactory() -> new CheesePizza(nyFactory) -> nyFactory.createDough()
let pizza: Pizza = nyStore.orderPizza("cheese");
console.log(`\n### Ethan ordered a ${pizza.getName()} ###\n`);

// 3. 시카고 스토어에서 치즈 피자 주문
//    chicagoStore.orderPizza -> ChicagoPizzaStore.createPizza -> new ChicagoPizzaIngredientFactory() -> new CheesePizza(chicagoFactory) -> chicagoFactory.createDough()
pizza = chicagoStore.orderPizza("cheese");
console.log(`\n### Joel ordered a ${pizza.getName()} ###\n`);