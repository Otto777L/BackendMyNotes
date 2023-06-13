import { IValueObject } from "src/core/domain/IValueObject";

export abstract class UbicacionNota{
    constructor(){}

    public abstract equals(other:IValueObject):boolean;
}