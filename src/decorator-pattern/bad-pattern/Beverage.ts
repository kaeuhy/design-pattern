export abstract class Beverage {
    protected description: string = "제목 없음";

    // 모든 첨가물을 슈퍼클래스에서 인스턴스 변수로 관리
    private _hasMilk: boolean = false;
    private _hasSoy: boolean = false;
    private _hasMocha: boolean = false;
    private _hasWhip: boolean = false;

    public getDescription(): string {
        return this.description;
    }

    // 첨가물 가격 계산 로직이 슈퍼클래스에 고정
    public cost(): number {
        let condimentCost = 0.0;
        if (this.hasMilk()) condimentCost += 0.10;
        if (this.hasSoy()) condimentCost += 0.15;
        if (this.hasMocha()) condimentCost += 0.20;
        if (this.hasWhip()) condimentCost += 0.10;

        return condimentCost;
    }

    // 각 인스턴스 변수를 제어하기 위한 Getter와 Setter
    public hasMilk(): boolean { return this._hasMilk; }
    public setMilk(value: boolean): void { this._hasMilk = value; }

    public hasSoy(): boolean { return this._hasSoy; }
    public setSoy(value: boolean): void { this._hasSoy = value; }

    public hasMocha(): boolean { return this._hasMocha; }
    public setMocha(value: boolean): void { this._hasMocha = value; }

    public hasWhip(): boolean { return this._hasWhip; }
    public setWhip(value: boolean): void { this._hasWhip = value; }
}