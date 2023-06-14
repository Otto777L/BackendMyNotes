import { Optional } from "src/core/OrtogonalSolutions/Optional";
import {IdNota} from "src/Note/domain/value_objects/IdNota";
import {CuerpoNota} from "src/Note/domain/value_objects/CuerpoNota";
import {TituloNota} from "src/Note/domain/value_objects/TituloNota";
import {FechaNota} from "src/Note/domain/value_objects/FechaNota";

export class Nota {
    private notaId:IdNota;
    private titulo:TituloNota;
    private cuerpo:CuerpoNota;
    private fechaCreacion:FechaNota;
    private fechaEliminacion:Optional<FechaNota>;
    private fechaActualizacion:FechaNota;
    //private usuario:IdUsuario;


    constructor(id:IdNota, t:TituloNota, c:CuerpoNota, fechaCreacion:FechaNota){
        this.notaId = id;
        this.titulo = t;
        this.cuerpo = c;
        this.fechaCreacion = fechaCreacion;
        this.fechaEliminacion = new Optional<FechaNota>();
        this.fechaActualizacion = fechaCreacion;
    }

    public eliminar(){
        this.fechaEliminacion = new Optional<FechaNota>(new FechaNota());
    }

    public setTitulo(t: TituloNota):void{
        this.titulo = t;
        //tirar evento de cuerpo actualizado
    }

    public setCuerpo(c: CuerpoNota):void{
        this.cuerpo = c;
        //tirar evento de cuerpo actualizado
    }

}