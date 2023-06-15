import { IValueObject } from "src/core/domain/IValueObject";

export class IdNota implements IValueObject{
    private uuid:string = "";

    constructor(){
        //En la clase core utilizar una interfaz que por inyeccion de dependencia utilice la libreria por defecto de uuids
        //si es que se puede
    }

    public equals(other: IdNota): boolean{
        if (other.getId() == this.getId())
            return true;
        else
            return false;
    }

    public getId():string{
        return this.uuid;
    }

}