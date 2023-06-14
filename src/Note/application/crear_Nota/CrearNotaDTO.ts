import { Optional } from "src/core/ortogonal_solutions/Optional";
import { TipoComando } from "../core_Comandos/TipoComando";
import { IDataTransferCommand } from "../core_Comandos/IDataTransferCommand";

export class CrearNotaDTO extends IDataTransferCommand{
    titulo:string;
    cuerpo:string;
    fechaCreacion:Date;
    fechaEliminacion:Optional<Date>;
    fechaActualizacion:Date;
    latitud:number;
    altitud:number;
    usuarioId:string;

    constructor(t:string, c:string, fc:Date, fe:Optional<Date>, fa:Date, l:number, a:number, u:string){
        super();
        super.tipoComando = TipoComando.CrearNota;
        this.titulo = t;
        this.cuerpo = c;
        this.fechaCreacion = fc;
        this.fechaEliminacion = fe;
        this.fechaActualizacion = fa;
        this.latitud = l;
        this.altitud = a;
        this.usuarioId = u;
    }
}