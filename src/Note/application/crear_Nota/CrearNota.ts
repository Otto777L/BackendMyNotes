import { Either } from "src/core/ortogonal_solutions/Either";
import { IComandoNota } from "../core_Comandos/IComandoNota";
import { CrearNotaDTO } from "./CrearNotaDTO";
import { IGeneradorUUID } from '../core_Comandos/IGeneradorUUID';
import { Nota } from "src/Note/domain/Nota";

export class CrearNota implements IComandoNota<CrearNotaDTO>{
    private readonly generadorUUID:IGeneradorUUID;
    private readonly repositorioNota;

    constructor(g:IGeneradorUUID){
        this.generadorUUID = g;
    }

    public execute(cmd:CrearNotaDTO):Either<CrearNotaDTO,Error>{
        /*
            generar uuid  ####
            crear objecto 
            "guardar nota"
                - publicar evento de notacreada
                - guardar y actualizar lo que se deba actualizar  
        */
        let notaId:string = this.generadorUUID.generate();
        let nota:Nota;//new Nota();

        return Either.makeLeft<CrearNotaDTO, Error>(cmd);
    }
}