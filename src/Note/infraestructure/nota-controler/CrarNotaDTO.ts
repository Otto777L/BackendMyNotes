import { Optional } from "src/core/ortogonal_solutions/Optional";

export class CrearNotaDTO{
    titulo:string;
    cuerpo:string;
    fechaCreacion:Date;
    fechaEliminacion:Date;
    fechaActualizacion:Date;
    latitud:number;
    altitud:number;
    usuarioId:string;
}