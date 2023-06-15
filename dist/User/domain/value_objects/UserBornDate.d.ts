import { IValueObject } from "src/core/domain/IValueObject";
export declare class UserBornDate implements IValueObject {
    private date;
    constructor();
    equals(other: UserBornDate): boolean;
    getFecha(): Date;
}
