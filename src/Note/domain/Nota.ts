import { Optional } from "src/core/ortogonal_solutions/Optional";
import {IdNota} from "src/Note/domain/value_objects/IdNota";
import {CuerpoNota} from "src/Note/domain/value_objects/CuerpoNota";
import {TituloNota} from "src/Note/domain/value_objects/TituloNota";
import {FechaNota} from "src/Note/domain/value_objects/FechaNota";
import { UbicacionNota } from "./value_objects/UbicacionNota";

export class Nota {
    private notaId:IdNota;
    private titulo:TituloNota;
    private cuerpo:CuerpoNota;
    private fechaCreacion:FechaNota;
    private fechaEliminacion:Optional<FechaNota>;
    private fechaActualizacion:FechaNota;
    private ubicacion:UbicacionNota;
    //private usuario:IdUsuario;


    constructor(id:IdNota, t:TituloNota, c:CuerpoNota, fechaCreacion:FechaNota, fechaEliminacion:Optional<FechaNota>,
                fechaActualizacion:FechaNota, ubi:UbicacionNota){
        this.notaId = id;
        this.titulo = t;
        this.cuerpo = c;
        this.fechaCreacion = fechaCreacion;
        this.fechaEliminacion = fechaEliminacion;
        this.fechaActualizacion = fechaActualizacion;
        this.ubicacion = ubi;
    }

    public eliminar(fecha:FechaNota){
        this.fechaEliminacion = new Optional<FechaNota>(fecha);
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