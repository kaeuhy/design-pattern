// 팩토리 메서드를 적용하지않고 구현한 사용자 역할에 따라 다른 UI 버튼을 생성하는 코드

interface Button {
    render(): void;
}

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

// 새로 추가할 버튼
class DangerButton implements Button {
    public render(): void {
        console.log("<button class='danger'>계정 삭제</button>");
    }
}

// 페이지 렌더링과 객체 생성이 섞여있음
class BadApplication {

    public renderPage(userRole: 'admin' | 'guest' | 'powerUser'): void {
        let button: Button;

        console.log("페이지 렌더링 중...");

        // if 문이 하드코딩
        if (userRole === 'admin') {
            button = new PrimaryButton();
        } else if (userRole === 'guest') {
            button = new SecondaryButton();
        } else if (userRole === 'powerUser') {
            button = new DangerButton();
        } else {
            throw new Error('알 수 없는 역할입니다.');
        }

        button.render();
    }
}

const badApp = new BadApplication();
badApp.renderPage('admin');
badApp.renderPage('powerUser');