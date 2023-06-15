import { IValueObject } from "src/core/domain/IValueObject";
export declare class IdUser implements IValueObject {
    private uuid;
    constructor(id: string);
    equals(other: IdUser): boolean;
    getId(): string;
}
