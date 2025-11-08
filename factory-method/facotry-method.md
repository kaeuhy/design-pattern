### 팩토리 메서드

부모 클래스에서 객체들을 생성할 수 있는 인터페이스를 제공하지만, 자식 클래스들이 생성될 객체들의 유형을 변경할 수 있도록 하는 생성 패턴입니다.

부모 클래스에는 객체를 생성하기 위한 메서드의 인터페이스를 정의합니다. 그리고 실제로 어떤 객체를 생성할지에 대한 구체적인 결정은 자식 클래스가 하도록 합니다.

</br>
</br>

**팩토리 메서드는 왜 사용하는거야?**

새로운 클래스를 추가하게되면 기존 클래스를 일일이 수정해야하는 문제가 발생합니다.

기존 클래스들의 코드 변경 없이 확장을 위한 디자인 패턴으로 팩토리 메서드 패턴을 사용합니다.

</br>
</br>

**Bad Pattern**

해당 코드는 특정 클래스에 직접 의존해 있는 패턴의 코드입니다.

```tsx
class Logistics {
	public planDelivery(type: 'road' | 'sea'): void {
		let transport: unknown;
		
		if (type === 'road') {
			transport = new Truck();
		} else if (type === 'sea') {
			transport = new Ship();
		} else {
			throw new Error("Unkown transport type");
		}
		
		transport.deliver();
	}
}
```

다음 코드는 아래와 같은 문제점이 발생합니다.

- **높은 결함도**:
    - `Logistics` 클래스가 `Truck`과 `Ship`이라는 구상 클래스에 직접 의존합니다.
- **OCP 위반**:
    - 새로운 운송수단을 추가하려면 `Logistics` 클래스 자체를 수정해야 합니다. 수정에는 닫혀있고, 확장에는 열려있어야 한다는 OCP 원칙을 위반합니다.

</br>
</br>

**Good Pattern**

팩토리 메서드 패턴은 `new` 키워드를 사용한 직접적인 객체 생성을 팩토리 메서드 호출로 대체합니다.

팩토리 메서드에서 반환된 객체는 제품이라고도 불립니다.

</br>
</br>

`Product`의 공통 규격을 정의합니다.

```tsx
interface Produck {
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
```

- `interface Produck`:
    - 공장이 만들어낼 제품의 공통 규격입니다. 여기서는 모든 제품이 `operation()` 메서드를 가져야 한다고 정의합니다.
- `class`:
    - `Produck` 인터페이스에 맞춰 실제로 만들어진 제품들입니다.

</br>
</br>

`Creator` 부분인 비즈니스 로직과 팩토리를 선언합니다.

`abstract` 키워드는 TypeScript에서 미완성 또는 뼈대만 있음을 의미하는 키워드를 말합니다.

- `abstract` 추상 클래스:
    - `new` 연산자를 사용하여 직접 인스턴스를 만들 수 없습니다.
    - 오직 다른 클래스가 추상 클래스를 상속하기 위한 부모 클래스로만 사용됩니다.
- `abstract` 추상 메서드:
    - `abstract` 클래스를 상속받는 자식 클래스는 부모가 가진 모든 `abstract` 메서드를 반드시 구현해야만 합니다.

</br>

```tsx
abstract class Creator {
	public abstract factoryMethod(): Product;
	
	public someOperation(): string {
		const product = this.factoryMethod();
		return `Creator: 동일한 생성자의 코드가 ${product.operation()}로 작동했습니다.`;
	}
}
```

- `factoryMethod()`:
    - 팩토리 메서드로 `abstract`로 선언하여 자식 클래스는 해당 메서드를 반드시 구현해야 한다고 강제합니다.
- `someOperation()`:
    - `new` 키워드를 사용하지않고 `this.factoryMethod()`를 호출하며 제품을 가져옵니다.
    - 어떤 제품이 생성되는지 알 필요 없이, `Product` 타입의 객체를 사용하여 자신의 로직을 수행합니다.

</br>
</br>

실제 생성 로직인 `ConcreteCreator`를 구현합니다.

```tsx
class ConcreteCreator1 extends Creator {
	public factoryMethod(): Product {
		return new ConcreateProduct1();
	}
}

class ConcreteCreator2 extends Creator {
	public factoryMethod(): Product {
		return new ConcreteProduct2();
	}
}
```

- `ConcreteCreator`:
    - 공장의 실제 구현체 자식 클래스들입니다.
- `facotoryMethod()`:
    - 부모인 `Creator` 가 `abstract` 로 선언했던 팩토리 메서드를 재정의 합니다.
    - 안좋은 패턴에 있었던 `if` 문 로직이 `Creator` 의 비즈니스 로직에서 완전히 분리되어, 각 자식 클래스로 나누어졌습니다.

</br>
</br>

Client 부분으로 생성자의 인터페이스만 사용합니다,

```tsx
function clientCode(creator: Creator) {
	console.log('클라이언트: 생성자의 클래스를 모르지만, 여전히 작동합니다.');
  console.log(creator.someOperation());
  // 다른 클라이언트 로직이 올 수 있습니다.
 }
 
 console.log('앱: ConcreteCreator1로 실행되었습니다.');
clientCode(new ConcreteCreator1());

console.log('');

console.log('앱: ConcreteCreator2로 실행되었습니다.');
clientCode(new ConcreteCreator2());
```

- `clientCode`:
    - 클라이언트 함수는 부모인 `Creator` 타입으로 받습니다.
- `new ConcreteCreator1()`이 전달:
    - `someOperation`은 `ConcreteCreator1`의 `factoryMethod`를 호출하여 `ConcreteProduct1`을 사용합니다.
- `new ConcreteCreator2()`가 전달:
    - `someOperation`은 `ConcreteCreator2`의 `factoryMethod`를 호출하여 `ConcreteProduct2`를 사용합니다.

</br>
</br>