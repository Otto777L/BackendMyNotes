import { Either } from "src/core/ortogonal_solutions/Either";
import { IServicio } from "../../../core/application/core_Comandos/IServicio";
import { EliminarNotaComando } from "./EliminarNotaComando";
import { IGeneradorUUID } from '../../../core/application/core_Comandos/IGeneradorUUID';
import { Nota } from "src/Note/domain/Nota";
import { FabricaNota } from "src/Note/domain/fabrics/FabricaNota";
import { MementoNota} from "../../domain/MementoNota";
import { RepositorioNota } from "src/Note/domain/repositories/RepositorioNota";
import { Optional } from "src/core/ortogonal_solutions/Optional";

export class EliminarNota implements IServicio<MementoNota>{
    private readonly repositorio:RepositorioNota;

    constructor(r:RepositorioNota){
        this.repositorio = r;
    }

    public async execute(cmd:EliminarNotaComando):Promise<Either<MementoNota, Error>>{
        /*        */
        let nota:Nota;
        const v1:Either<Optional<Nota>, Error> = await this.repositorio.buscarNotaporId(FabricaNota.fabricarIdNota(cmd.id));
        if (v1.isLeft()){
            const v2:Optional<Nota> = v1.getLeft();
            if (v2.HasValue()){
                nota = v2.getValue();
            }
            else {
                return Either.makeRight<MementoNota, Error>(new Error());
            }
        }
        else {
            return Either.makeRight<MementoNota, Error>(v1.getRight());
        }
        
        console.log(nota);
        const notaEliminada:Either<Optional<MementoNota>, Error> = await this.repositorio.eliminarNota(nota.guardar());
        
        if (notaEliminada.isLeft()){
            return Either.makeLeft<MementoNota, Error>(notaEliminada.getLeft().getValue());
        }
        else {
            return Either.makeRight<MementoNota, Error>(notaEliminada.getRight());
        }
        
    }
}