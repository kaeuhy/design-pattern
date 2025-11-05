// 싱글턴 클래스
class Singleton {
    static #instance: Singleton;

    private constructor() {
    }

    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }

        return Singleton.#instance;
    }

    public someBusinessLogic() {
        // 인스턴스에서 실행될 수 있는 비즈니스 로직 ...
    }
}

// 클라이언트 코드
function clientCode() {
    const s1 = Singleton.instance;
    const s2 = Singleton.instance;

    if (s1 === s2) {
        console.log("싱글턴이 작동합니다. 두 변수는 동일한 인스턴스를 포함합니다.");
    } else {
        console.log("싱글턴이 실패했습니다. 변수들이 서로 다른 인스턴스를 포함합니다.");
    }
}

clientCode();