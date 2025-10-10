"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinLengthStrategy = exports.EmailStrategy = exports.RequiredStrategy = void 0;
// 필수 항목을 검사하는 전략입니다.
class RequiredStrategy {
    validate(value) {
        const isValid = value.trim() !== '';
        return {
            isValid,
            message: isValid ? '' : '필수 항목입니다.',
        };
    }
}
exports.RequiredStrategy = RequiredStrategy;
// 이메일 형식을 검사하는 전략입니다.
class EmailStrategy {
    validate(value) {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        return {
            isValid,
            message: isValid ? '' : '올바른 이메일 형식이 아닙니다.',
        };
    }
}
exports.EmailStrategy = EmailStrategy;
// 최소 길이를 검사하는 전략입니다.
class MinLengthStrategy {
    minLength;
    constructor(minLength) {
        this.minLength = minLength;
    }
    validate(value) {
        const isValid = value.length >= this.minLength;
        return {
            isValid,
            message: isValid ? '' : `최소 ${this.minLength}자 이상 입력해야 합니다.`,
        };
    }
}
exports.MinLengthStrategy = MinLengthStrategy;
