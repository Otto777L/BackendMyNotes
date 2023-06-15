import { IValueObject } from "src/core/domain/IValueObject";

export class UbicacionNota implements IValueObject{
    private latitud:number;
    private longitud:number;

    constructor(l:number, a:number){
        this.latitud = l;
        this.longitud = a;
    }

    public getLatitud():number{
        return this.latitud;
    }

    public getAltitud():number{
        return this.longitud;
    }

    public equals(other:UbicacionNota):boolean{
        if((other.getAltitud() == this.longitud) && (other.getLatitud() == this.latitud))
            return true;
        else
            return false;
    }
}