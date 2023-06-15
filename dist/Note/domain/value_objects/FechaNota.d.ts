import { IValueObject } from "src/core/domain/IValueObject";
export declare class FechaNota implements IValueObject {
    private date;
    constructor(d: Date);
    equals(other: FechaNota): boolean;
    getFecha(): Date;
}
