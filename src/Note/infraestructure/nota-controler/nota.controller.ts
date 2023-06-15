import { Body, Controller, Get, Post } from '@nestjs/common';
import { CrearNotaComando } from 'src/Note/application/crear_Nota/CrearNotaComando';
import { CrearNotaDTO } from './CrarNotaDTO';
import { CommandHandler } from '../../application/core_Comandos/CommandHandler';
import { TipoComando } from 'src/Note/application/core_Comandos/TipoComando';
import { ICommand } from 'src/Note/application/core_Comandos/ICommand';
import { IServicio } from 'src/Note/application/core_Comandos/IServicio';
import { CrearNota } from 'src/Note/application/crear_Nota/CrearNota';
import { GeneradorUUID } from '../UUID/GeneradorUUID';
import { Either } from 'src/core/ortogonal_solutions/Either';
import { Optional } from 'src/core/ortogonal_solutions/Optional';
import { VistaNota } from 'src/Note/application/crear_Nota/VistaNota';

@Controller('nota')
export class NotaController {
    commandHandler:CommandHandler<VistaNota> = new CommandHandler();

    constructor(){
        /*INYECCION DE DEPENDENCIAS*/
        const servicioCrearNota:IServicio<VistaNota> = new CrearNota(new GeneradorUUID());
        this.commandHandler.addComando(servicioCrearNota, TipoComando.CrearNota);
    }

    @Get()
    helloworld(){
        return "hello world";
    }

    @Post()
    crearNota(@Body() nuevaNota:CrearNotaDTO){

        let fechaeliminada:Optional<Date>
        if (nuevaNota.fechaEliminacion == null)
            fechaeliminada = new Optional<Date>();
        else
            fechaeliminada = new Optional<Date>(nuevaNota.fechaEliminacion);
        
        const cmd:CrearNotaComando = new CrearNotaComando(nuevaNota.titulo, nuevaNota.cuerpo, nuevaNota.fechaCreacion, fechaeliminada,
                                                            nuevaNota.fechaActualizacion, nuevaNota.latitud, nuevaNota.altitud, "");
        

        const result:Either<VistaNota,Error> = this.commandHandler.execute(cmd);


        if (result.isLeft()){
            return result.getLeft();
        }
        else{
            return "prueba fallida"
        }
    }


}
