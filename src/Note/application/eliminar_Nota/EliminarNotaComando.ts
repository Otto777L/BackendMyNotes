import { Optional } from "src/core/ortogonal_solutions/Optional";
import { TipoComando } from "../../../core/application/core_Comandos/TipoComando";
import { ICommand } from "../../../core/application/core_Comandos/ICommand";
import { EliminarNota } from './EliminarNota';

export class EliminarNotaComando extends ICommand{
    notaId:String;
    usuarioId:string;
    fechaEliminada:Date;

    constructor(id:string, user:string, f:Date){
        super();
        super.tipoComando = TipoComando.EliminarNota;
        this.notaId = id;
        this.usuarioId = user;
        this.fechaEliminada = f;
    }
}