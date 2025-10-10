// 전략을 사용하는 Validator 클래스를 정의합니다.
import {ValidationStrategy} from "./strategy";

//유효성 검사를 실행하는 Context 클래스입니다.
export class Validator {
    private strategy: ValidationStrategy | null = null;

    // 외부에서 전략 부품을 받아 교체하는 메서드이다.
    // 해당 메서드를 통해 런타임에 동적으로 유효성 검사 규칙을 바꿀 수 있다.
    public setStrategy(strategy: ValidationStrategy): void {
        this.strategy = strategy;
        console.log(`전략이 ${strategy.constructor.name} (으)로 변경되었습니다.`);
    }

    // 장착된 strategy 객체에게 validate 작업을 위임한다.
    // 그저 strategy.validate를 호출하기만 한다.
    public validate(value: string): { isValid: boolean; message: string } {
        if (!this.strategy) {
            throw new Error('검증 전략이 설정되지 않았습니다.');
        }
        console.log(`${value} 값을 검증합니다.`);
        const result = this.strategy.validate(value);
        console.log(`결과: ${result.isValid ? '성공' :
            '실패'}, 메시지: "${result.message || '없음'}"\n`);

        return result;
    }
}