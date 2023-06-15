import { CrearNotaComando } from "./CrearNotaComando";

export class VistaNota{
    notaId:string;
    titulo:string;
    cuerpo:string;
    fechaCreacion:Date;
    fechaEliminacion?:Date;
    fechaActualizacion:Date;
    latitud:number;
    altitud:number;
    usuarioId:string;

    constructor(id:string, dto:CrearNotaComando){
        this.notaId = id;
        this.titulo = dto.titulo;
        this.cuerpo = dto.cuerpo;
        this.fechaCreacion = dto.fechaCreacion;
        if (dto.fechaEliminacion.HasValue())
            this.fechaEliminacion = dto.fechaEliminacion.getValue();
        this.fechaActualizacion = dto.fechaActualizacion;
        this.latitud = dto.latitud;
        this.altitud = dto.altitud;
        this.usuarioId = dto.usuarioId;
    }
}