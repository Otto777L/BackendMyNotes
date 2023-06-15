import { TipoComando } from "./TipoComandoNotas";
export declare abstract class ICommand {
    protected tipoComando: TipoComando;
    getType(): TipoComando;
}
