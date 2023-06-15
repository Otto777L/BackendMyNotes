import { Either } from "src/core/ortogonal_solutions/Either";
import { IServicio } from "../../../core/application/core_Comandos/IServicio";
import { CrearNotaComando } from "./CrearNotaComando";
import { IGeneradorUUID } from '../../../core/application/core_Comandos/IGeneradorUUID';
import { Nota } from "src/Note/domain/Nota";
import { FabricaNota } from "src/Note/domain/fabrics/FabricaNota";
import { VistaNota } from "./VistaNota";

export class CrearNota implements IServicio<VistaNota>{
    private readonly generadorUUID:IGeneradorUUID;
    private readonly repositorioNota;

    constructor(g:IGeneradorUUID){
        this.generadorUUID = g;
    }

    public execute(cmd:CrearNotaComando):Either<VistaNota,Error>{
        /*
            generar uuid  ####
            crear objecto 
            "guardar nota"
                - publicar evento de notacreada
                - guardar y actualizar lo que se deba actualizar  
        */
        let notaId:string = this.generadorUUID.generate();
        let nota:Nota = FabricaNota.fabricar(notaId, cmd.titulo,cmd.cuerpo,cmd.fechaCreacion,cmd.fechaEliminacion,cmd.fechaActualizacion,
                                             cmd.latitud,cmd.altitud, cmd.usuarioId);
        console.log(nota);    
        return Either.makeLeft<VistaNota, Error>(new VistaNota(notaId, cmd.titulo,cmd.cuerpo,cmd.fechaCreacion,cmd.fechaEliminacion,cmd.fechaActualizacion,
                                                 cmd.latitud,cmd.altitud, cmd.usuarioId));
    }
}