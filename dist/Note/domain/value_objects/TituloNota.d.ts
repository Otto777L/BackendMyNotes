import { IValueObject } from "src/core/domain/IValueObject";
export declare class TituloNota implements IValueObject {
    private titulo;
    constructor(s: string);
    equals(other: TituloNota): boolean;
    getTitulo(): string;
}
