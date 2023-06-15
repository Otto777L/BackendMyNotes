import { IValueObject } from "src/core/domain/IValueObject";
export declare class UbicacionNota implements IValueObject {
    private latitud;
    private longitud;
    constructor(l: number, a: number);
    getLatitud(): number;
    getAltitud(): number;
    equals(other: UbicacionNota): boolean;
}
