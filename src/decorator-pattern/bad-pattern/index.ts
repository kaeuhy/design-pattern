import {FlawedHouseBlend} from "./FlawedHouseBlend";

const myCoffee = new FlawedHouseBlend();

// 첨가물을 추가
myCoffee.setMocha(true);
myCoffee.setWhip(true);

// 최종 가격
// 0.89 + 0.20 + 0.10
console.log(myCoffee.cost());