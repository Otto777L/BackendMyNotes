import { IValueObject } from "src/core/domain/IValueObject";
export declare class CuerpoNota implements IValueObject {
    private cuerpo;
    constructor(s: string);
    equals(other: CuerpoNota): boolean;
    getCuerpo(): string;
}
