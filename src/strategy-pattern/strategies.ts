// 구체적인 전략들로 인터페이스를 구현하는 실제 전략 클래스들입니다.
import {ValidationStrategy} from "./strategy";

// 필수 항목을 검사하는 전략입니다.
export class RequiredStrategy implements ValidationStrategy {
    public validate(value: string): { isValid: boolean; message: string } {
        const isValid = value.trim() !== '';
        return {
            isValid,
            message: isValid ? '' : '필수 항목입니다.',
        };
    }
}

// 이메일 형식을 검사하는 전략입니다.
export class EmailStrategy implements ValidationStrategy {
    public validate(value: string): { isValid: boolean; message: string } {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        return {
            isValid,
            message: isValid ? '' : '올바른 이메일 형식이 아닙니다.',
        };
    }
}

// 최소 길이를 검사하는 전략입니다.
export class MinLengthStrategy implements ValidationStrategy {
    private readonly minLength: number;

    constructor(minLength: number) {
        this.minLength = minLength;
    }

    public validate(value: string): { isValid: boolean; message: string } {
        const isValid = value.length >= this.minLength;
        return {
            isValid,
            message: isValid ? '' : `최소 ${this.minLength}자 이상 입력해야 합니다.`,
        };
    }
}