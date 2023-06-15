import { Optional } from "src/core/ortogonal_solutions/Optional";
import { ICommand } from "../../../core/application/core_Comandos/ICommand";
export declare class CrearNotaComando extends ICommand {
    titulo: string;
    cuerpo: string;
    fechaCreacion: Date;
    fechaEliminacion: Optional<Date>;
    fechaActualizacion: Date;
    latitud: number;
    altitud: number;
    usuarioId: string;
    constructor(t: string, c: string, fc: Date, fe: Optional<Date>, fa: Date, l: number, a: number, user: string);
}
