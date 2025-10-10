"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
//유효성 검사를 실행하는 Context 클래스입니다.
class Validator {
    strategy = null;
    setStrategy(strategy) {
        this.strategy = strategy;
        console.log(`전략이 ${strategy.constructor.name} (으)로 변경되었습니다.`);
    }
    validate(value) {
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
exports.Validator = Validator;
