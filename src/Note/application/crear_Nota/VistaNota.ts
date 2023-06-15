import { Optional } from "src/core/ortogonal_solutions/Optional";
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

    constructor(id:string, t:string, c:string, fc:Date, fe:Optional<Date>, fa:Date, l:number, a:number, user:string){
        this.notaId = id;
        this.titulo = t;
        this.cuerpo = c;
        this.fechaCreacion = fc;
        if (fe.HasValue())
            this.fechaEliminacion = fe.getValue();
        this.fechaActualizacion = fa;
        this.latitud = l;
        this.altitud = a;
        this.usuarioId = user;
    }
}