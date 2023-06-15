import { Either } from "src/core/ortogonal_solutions/Either";
import { IServicio } from "../../../core/application/core_Comandos/IServicio";
import { CrearNotaComando } from "./CrearNotaComando";
import { IGeneradorUUID } from '../../../core/application/core_Comandos/IGeneradorUUID';
import { MementoNota } from "../../domain/MementoNota";
import { RepositorioNota } from "src/Note/domain/repositories/RepositorioNota";
export declare class CrearNota implements IServicio<MementoNota> {
    private readonly generadorUUID;
    private readonly repositorio;
    constructor(g: IGeneradorUUID, r: RepositorioNota);
    execute(cmd: CrearNotaComando): Promise<Either<MementoNota, Error>>;
}
