import { Optional } from "src/core/ortogonal_solutions/Optional";
import { IdNota } from "src/Note/domain/value_objects/IdNota";
import { CuerpoNota } from "src/Note/domain/value_objects/CuerpoNota";
import { TituloNota } from "src/Note/domain/value_objects/TituloNota";
import { FechaNota } from "src/Note/domain/value_objects/FechaNota";
import { IdUser } from "src/User/domain/value_objects/IdUser";
import { UbicacionNota } from './value_objects/UbicacionNota';
import { MementoNota } from "./MementoNota";
export declare class Nota {
    private notaId;
    private titulo;
    private cuerpo;
    private fechaCreacion;
    private fechaEliminacion;
    private fechaActualizacion;
    private ubicacion;
    private usuario;
    constructor(id: IdNota, t: TituloNota, c: CuerpoNota, fechaCreacion: FechaNota, fechaEliminacion: Optional<FechaNota>, fechaActualizacion: FechaNota, ubicacion: UbicacionNota, user: IdUser);
    eliminar(fecha: FechaNota): void;
    setTitulo(t: TituloNota): void;
    setCuerpo(c: CuerpoNota): void;
    guardar(): MementoNota;
}
