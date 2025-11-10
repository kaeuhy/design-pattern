// 팩토리가 생성할 각 재료의 공통 인터페이스
export interface Dough {
    toString(): string;
}

export interface Sauce {
    toString(): string;
}

export interface Cheese {
    toString(): string;
}

// 필요시 추가적인 재료 인터페이스 구현