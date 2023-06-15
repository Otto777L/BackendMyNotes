import { Optional } from "src/core/ortogonal_solutions/Optional";
import { Nota } from "../Nota";
export declare class FabricaNota {
    static fabricar(id: string, titulo: string, cuerpo: string, fechaCreacion: Date, fechaEliminacion: Optional<Date>, fechaActualizacion: Date, latitud: number, altitud: number, usuarioId: string): Nota;
}
