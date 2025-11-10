import { PizzaStore } from "./store/PizzaStore";
import { NYPizzaStore } from "./store/NYPizzaStore";
import { ChicagoPizzaStore } from "./store/ChicagoPizzaStore";
import { Pizza } from "./products/Pizza";

// 구상 생성자 인스턴스 생성
const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

// 뉴욕 지점에서 치즈 피자 주문
let pizza: Pizza = nyStore.orderPizza("cheese");
console.log(`\n Ethan ordered a ${pizza.getName()} \n`);

// 시카고 지점에서 치즈 피자 주문
pizza = chicagoStore.orderPizza("cheese");
console.log(`\n Joel ordered a ${pizza.getName()} \n`);