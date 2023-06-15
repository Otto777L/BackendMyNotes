import { IValueObject } from "src/core/domain/IValueObject";
export declare class IdNota implements IValueObject {
    private uuid;
    constructor(id: string);
    equals(other: IdNota): boolean;
    getId(): string;
}
