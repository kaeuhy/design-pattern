// 팩토리 메서드를 적용하여 구현한 사용자 역할에 따라 다른 UI 버튼을 생성하는 코드

// Product
interface Button {
    render(): void; // 모든 버튼은 'render' 메서드를 가져야 합니다.
}

// 실제 버튼 클래스
class PrimaryButton implements Button {
    public render(): void {
        console.log("<button class='primary'>로그인</button>");
    }
}

class SecondaryButton implements Button {
    public render(): void {
        console.log("<button class='secondary'>둘러보기</button>");
    }
}

class DangerButton implements Button {
    public render(): void {
        console.log("<button class='danger'>계정 삭제</button>");
    }
}

// Creator
abstract class Application {
    public renderPage(): void {
        console.log("페이지 렌더링 중...");

        const button = this.createButton();

        button.render();
    }

    public abstract createButton(): Button;
}

// ConcreateCreator
class AdminApplication extends Application {
    public createButton(): Button {
        return new PrimaryButton();
    }
}

class GuestApplication extends Application {
    public createButton(): Button {
        return new SecondaryButton();
    }
}

class PowerUserApplication extends Application {
    public createButton(): Button {
        return new DangerButton();
    }
}


console.log('[관리자 앱 실행]');
const adminApp = new AdminApplication();
adminApp.renderPage();

console.log('\n[게스트 앱 실행]');
const guestApp = new GuestApplication();
guestApp.renderPage();

console.log('\n[파워유저 앱 실행]');
const powerUserApp = new PowerUserApplication();
powerUserApp.renderPage();