import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CrearNotaComando } from 'src/Note/application/crear_Nota/CrearNotaComando';
import { CrearNotaDTO } from './CrearNotaDTO';
import { CommandHandler } from '../../../core/application/core_Comandos/CommandHandler';
import { TipoComando } from 'src/core/application/core_Comandos/TipoComandoNotas';
import { IServicio } from 'src/core/application/core_Comandos/IServicio';
import { CrearNota } from 'src/Note/application/crear_Nota/CrearNota';
import { GeneradorUUID } from '../UUID/GeneradorUUID';
import { Either } from 'src/core/ortogonal_solutions/Either';
import { Optional } from 'src/core/ortogonal_solutions/Optional';
import { MementoNota } from 'src/Note/domain/MementoNota';
import { MongoNotaAdapter } from '../repositories_adapter/MongoNotaAdapter';

@Controller('nota')
export class NotaController {
    commandHandler:CommandHandler<MementoNota> = new CommandHandler();

    constructor(private adapter: MongoNotaAdapter){
        /*INYECCION DE DEPENDENCIAS*/
        const servicioCrearNota:IServicio<MementoNota> = new CrearNota(new GeneradorUUID(), adapter);
        this.commandHandler.addComando(servicioCrearNota, TipoComando.CrearNota);
    }

    @Get()
    getAllNotes(){
        return "hello world";
    }

    @Post()
    @UsePipes(ValidationPipe)
    async crearNota(@Body() nuevaNota:CrearNotaDTO){
        
        const fechaeliminada:Optional<Date> = new Optional<Date>(nuevaNota.fechaEliminacion);
        const cmd:CrearNotaComando = new CrearNotaComando(nuevaNota.titulo, nuevaNota.cuerpo, nuevaNota.fechaCreacion, fechaeliminada,
                                                            nuevaNota.fechaActualizacion, nuevaNota.latitud, nuevaNota.altitud, 
                                                            nuevaNota.usuarioId);
        
        const result:Either<MementoNota,Error> = await this.commandHandler.execute(cmd);

        if (result.isLeft()){
            return result.getLeft();
        }
        else{
            return "prueba fallida"
        }
    }


}
