import { TipoComando } from "./TipoComando";

export abstract class ICommand{
    protected tipoComando:TipoComando;

    getType():TipoComando{ return this.tipoComando}
}