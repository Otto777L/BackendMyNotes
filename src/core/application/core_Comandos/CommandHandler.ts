import { IServicio } from "./IServicio";
import { ICommand } from "./ICommand";
import { TipoComando } from "./TipoComando";
import { Either } from 'src/core/ortogonal_solutions/Either';

export class CommandHandler<TView>{
    private comandos:Map<TipoComando, IServicio<TView>>;

    constructor(){
        this.comandos = new Map();
    }

    public execute(dto:ICommand):Either<TView,Error>{
        for (let key of this.comandos.keys()) {
            if (dto.getType() == key){
                return this.comandos.get(key).execute(dto);
            }
        }
    }

    addComando(comando:IServicio<TView>, tipo:TipoComando){
        this.comandos.set(tipo, comando);
    }
}