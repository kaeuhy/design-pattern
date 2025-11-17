import {Beverage} from "./components/Beverage";
import {DarkRoast, Espresso, HouseBlend} from "./components/beverages";
import {Mocha, Soy, Whip} from "./decorators/condiments";

// 음료 가격을 출력하는 함수
function printBeverage(beverage: Beverage) {
    console.log(
        `주문: ${beverage.getDescription()} (${beverage.getSize()})`
    );
    console.log(`가격: $${beverage.cost().toFixed(2)}`);
}

// 에스프레소
let beverage1: Beverage = new Espresso();
printBeverage(beverage1);

// 더블 모카, 휘핑 크림을 추가한 벤티 사이즈 다크 로스트
let beverage2: Beverage = new DarkRoast();
beverage2.setSize("VENTI");
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
printBeverage(beverage2);

// 두유, 모카, 휘핑 크림을 추가한 그란데 사이즈 하우스 블랜드
let beverage3: Beverage = new HouseBlend();
beverage3.setSize("GRANDE");
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
printBeverage(beverage3);

