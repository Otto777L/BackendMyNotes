import { IValueObject } from "src/core/domain/IValueObject";
export declare class UserEmail implements IValueObject {
    private email;
    constructor(s: string);
    equals(other: UserEmail): boolean;
    getTitulo(): string;
}
