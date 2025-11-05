// 싱글턴 패턴을 적용하여 구현한 테마변경 코드

// 타입 별칭
type ThemeSingleton = 'light' | 'dark';

class ThemeManager {
    // Theme의 instance 보관을 위한 비공개 정적 instance
    private static instance: ThemeManager;
    // 현재 Theme 색상
    private currentTheme: ThemeSingleton = 'light';

    // new 키워드를 막기위한 private 생성자
    private constructor() {
        // <body class="light">
    }

    // instance 접근을 위한 유일한 공개 메서드
    public static getInstance(): ThemeManager {
        if (!ThemeManager.instance) {
            ThemeManager.instance = new ThemeManager();
        }
        return ThemeManager.instance;
    }

    // 현재 Theme 반환
    public getTheme(): ThemeSingleton {
        return this.currentTheme;
    }

    // Theme 전환
    public toggleTheme(): void {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        console.log(`테마가 ${this.currentTheme} 모드로 변경되었습니다.`);
    }
}

// 헤더 컴포넌트
const headerInstance = ThemeManager.getInstance();
console.log(`\n헤더바 -  현재 테마: ${headerInstance.getTheme()}`);

// 메인 페이지 컴포넌트
const mainInstance = ThemeManager.getInstance();

// 테마 변경 버튼 클릭
console.log('\n테마 토글 버튼 클릭');
headerInstance.toggleTheme();

// 헤더 인스턴스에 변경 상태에 따라 메인 페이지도 바껴야하기 때문에 변경된 테마를 확인
console.log(`\n메인 페이지 - 변경된 테마 확인: ${mainInstance.getTheme()}`);

if (headerInstance === mainInstance) {
    console.log('\n헤더와 메인이 동일한 테마가 적용되었습니다.');
}