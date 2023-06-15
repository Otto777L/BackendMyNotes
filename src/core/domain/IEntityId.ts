import { IValueObject } from "./IValueObject";

export abstract class IEntityId implements IValueObject{
    private UUID:string = "";
    
    constructor(){
        //generar id;
    }
    
    public abstract equals(other:IValueObject):boolean;
}