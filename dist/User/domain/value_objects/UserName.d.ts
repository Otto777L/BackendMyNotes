import { IValueObject } from "src/core/domain/IValueObject";
export declare class UserName implements IValueObject {
    private name;
    constructor(s: string);
    equals(other: UserName): boolean;
    getTitulo(): string;
}
