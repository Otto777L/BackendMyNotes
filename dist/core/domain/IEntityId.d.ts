import { IValueObject } from "./IValueObject";
export declare abstract class IEntityId implements IValueObject {
    private UUID;
    constructor();
    abstract equals(other: IValueObject): boolean;
}
