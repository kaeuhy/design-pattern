import {DEFAULT_SIZE, Size} from "../Size";

// 추상 클래스로 description과 size라는 공통 속성 및 관련 메소드를 가짐
export abstract class Beverage {
    protected description: string = "제목 없음";
    size: Size = DEFAULT_SIZE;

    // 모든 자식 클래스가 공통으로 사용하는 메소드
    public getDescription(): string {
        return this.description;
    }

    public setSize(size: Size): void {
        this.size = size;
    }

    public getSize(): Size {
        return this.size;
    }

    // 자식 클래스가 반드시 직접 구현해야 하는 추상 메소드
    public abstract cost(): number;
}