import { IServicio } from "./IServicio";
import { ICommand } from "./ICommand";
import { TipoComando } from "./TipoComando";
import { Either } from 'src/core/ortogonal_solutions/Either';
export declare class CommandHandler<TView> {
    private comandos;
    constructor();
    execute(dto: ICommand): Promise<Either<TView, Error>>;
    addComando(comando: IServicio<TView>, tipo: TipoComando): void;
}
