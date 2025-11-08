// 제품 인터페이스 및 구상 클래스
interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{ConcreteProduct1의 결과}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{ConcreteProduct2의 결과}';
    }
}

// Creator
abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: 동일한 생성자의 코드가 방금 ${product.operation()}로 작동했습니다.`;
    }
}

// ConcreteCreator
class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

//  Client
function clientCode(creator: Creator) {
    console.log('클라이언트: 생성자의 클래스를 모르지만, 여전히 작동합니다.');
    console.log(creator.someOperation());
}


console.log('앱: ConcreteCreator1로 실행되었습니다.');
clientCode(new ConcreteCreator1());

console.log('');

console.log('앱: ConcreteCreator2로 실행되었습니다.');
clientCode(new ConcreteCreator2());