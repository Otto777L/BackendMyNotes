import { randomUUID } from "crypto";
import { IGeneradorUUID } from "src/core/application/core_Comandos/IGeneradorUUID";
import {v4} from 'uuid'

export class GeneradorUUID implements IGeneradorUUID{
    public generate(): string {
        let id:string = v4();
        return id;
    }

}