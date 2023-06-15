import { TipoComando } from "./TipoComando";
export declare abstract class ICommand {
    protected tipoComando: TipoComando;
    getType(): TipoComando;
}
