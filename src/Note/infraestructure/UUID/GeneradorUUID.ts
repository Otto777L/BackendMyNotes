import { randomUUID } from "crypto";
import { IGeneradorUUID } from "src/Note/application/core_Comandos/IGeneradorUUID";


export class GeneradorUUID implements IGeneradorUUID{
    public generate(): string {
        let id:string = randomUUID().toString();
        return id;
    }

}