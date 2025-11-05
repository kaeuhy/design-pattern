// 싱글턴 패턴을 적용하지않고 구현한 테마변경 코드

type Theme = 'light' | 'dark';

class ThemeManager {

    // public이면 어디서든 new 키워드를 사용하여 생성가능함
    public constructor() {
    }

    private currentTheme: THeme = 'light';

    public getTheme(): Theme {
        return this.currentTheme;
    }

    public toggleTheme(): void {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        console.log(`테마가 ${this.currentTheme}로 변경되었습니다.`);
    }
}

// 검증
const headerInstance = new ThemeManager();
const mainInstance = new ThemeManager();

console.log(`현재 테마: ${headerInstance.getTheme()}`);
console.log(`현재 테마: ${mainInstance.getTheme()}`);

// 버튼 클릭
headerInstance.toggleTheme();

// header와 main이 다른 출력이 나옴
// Why? 다른 인스턴스이기 때문
console.log(`현재 테마: ${headerInstance.getTheme()}`);
console.log(`현재 테마: ${mainInstance.getTheme()}`);

if (headerInstance === mainInstance) {
    console.log('두 변수는 동일한 인스턴스입니다.');
} else {
    console.log('서로 다른 인스턴스입니다.');
}