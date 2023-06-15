import { Either } from "src/core/ortogonal_solutions/Either";
import { IServicio } from "../../../core/application/core_Comandos/IServicio";
import {EliminarNotaComando } from "./EliminarNotaComando";
import { IGeneradorUUID } from '../../../core/application/core_Comandos/IGeneradorUUID';
import { Nota } from "src/Note/domain/Nota";
import { FabricaNota } from "src/Note/domain/fabrics/FabricaNota";
import { VistaNota } from "../crear_Nota/VistaNota";

export class EliminarNota implements IServicio<VistaNota>{
    private readonly repositorioNota;

    constructor(){
    }

    public execute(cmd:EliminarNotaComando):Either<VistaNota,Error>{
        /*
            generar uuid  ####
            crear objecto 
            "guardar nota"
                - publicar evento de notacreada
                - guardar y actualizar lo que se deba actualizar  
        */
        /*
            buscar nota por Id
            settear la fecha eliminada
            

        */  
        /*return Either.makeLeft<VistaNota, Error>(new VistaNota(notaId, cmd.titulo,cmd.cuerpo,cmd.fechaCreacion,cmd.fechaEliminacion,cmd.fechaActualizacion,
                                                 cmd.latitud,cmd.altitud, cmd.usuarioId));*/
        return Either.makeRight<VistaNota,Error>(new Error());
    }
}