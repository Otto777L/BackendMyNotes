import { CrearNotaDTO } from './CrearNotaDTO';
import { CommandHandler } from '../../../core/application/core_Comandos/CommandHandler';
import { MementoNota } from 'src/Note/domain/MementoNota';
import { MongoNotaAdapter } from '../repositories_adapter/MongoNotaAdapter';
export declare class NotaController {
    private adapter;
    commandHandler: CommandHandler<MementoNota>;
    constructor(adapter: MongoNotaAdapter);
    getAllNotes(): string;
    crearNota(nuevaNota: CrearNotaDTO): Promise<MementoNota | "prueba fallida">;
}
