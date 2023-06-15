import { ExceptionFilter, Injectable } from "@nestjs/common";
import { Nota } from "src/Note/domain/Nota";
import { notaModel } from "src/Note/infraestructure/schemas/nota.schema";
import {InjectModel} from '@nestjs/mongoose'
import { Either } from "src/core/ortogonal_solutions/Either";
import { Optional } from "src/core/ortogonal_solutions/Optional";
import { RepositorioNota } from "src/Note/domain/repositories/RepositorioNota";
import { MementoNota } from "src/Note/domain/MementoNota";
import { Error } from "mongoose";
import { MongoError } from "mongodb";

@Injectable()
export class MongoNotaRepositorio implements RepositorioNota{
    constructor(@InjectModel(Nota.name) private readonly notamodel:notaModel){}

    async createNota(nota:MementoNota): Promise<Either<Optional<MementoNota>, Error>> {
        //const view:VistaNota = new VistaNota();
        console.log('CreateNotaDTO', nota);
        try {
            console.log('prueba2', await new this.notamodel(nota).save());
            const notaGuardada = await new this.notamodel(nota).save();
            
            return Promise.resolve(Either.makeLeft<Optional<MementoNota>, Error>(new Optional<MementoNota>(nota)));
        } catch (e) {
            return Promise.resolve(Either.makeRight<Optional<MementoNota>, Error>(e));
        }
    }
}