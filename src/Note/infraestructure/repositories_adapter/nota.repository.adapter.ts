import { Injectable } from "@nestjs/common";
import { CreateNotaDto } from "src/DTOs/createnota.dto";
import { Nota } from "src/Note/domain/Nota";
import { NotaRepository } from "src/Note/domain/repositories/repository.interface";
import { NotaSchema, notaModel } from "src/schemas/nota.schema";
import {InjectModel} from '@nestjs/mongoose'

@Injectable()
export class MongoNotaRepository implements NotaRepository{
    constructor(@InjectModel(Nota.name) private readonly notamodel:notaModel){}

    async createNota(nota: CreateNotaDto): Promise<Nota> {
        console.log('CreateNotaDto', nota);
        const user = await new this.notamodel(nota).save();
        return Promise.resolve(undefined);
    }
}