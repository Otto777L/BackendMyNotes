import { TipoComando } from "./TipoComando";

export abstract class IDataTransferCommand{
    protected tipoComando:TipoComando;

    getType():TipoComando{ return this.tipoComando}
}