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
import { IdNota } from "src/Note/domain/value_objects/IdNota";

@Injectable()
export class MongoNotaRepositorio{
    constructor(@InjectModel(Nota.name) private readonly notamodel:notaModel){}

    async createNota(nota:MementoNota): Promise<Either<Optional<MementoNota>, Error>> {
        //const view:VistaNota = new VistaNota();
        console.log('CreateNotaDTO', nota);
        try {
            //console.log('prueba2', await new this.notamodel(nota));
            const notaGuardada = await (new this.notamodel(nota)).save();
            
            return Promise.resolve(Either.makeLeft<Optional<MementoNota>, Error>(new Optional<MementoNota>(nota)));
        } catch (e) {
            return Promise.resolve(Either.makeRight<Optional<MementoNota>, Error>(e));
        }
    }

    async eliminarNota(nota:MementoNota):Promise<Either<Optional<MementoNota>, Error>>{
        try {
            //console.log('prueba2', await new this.notamodel(nota));
            const notaGuardada = await (new this.notamodel(nota)).deleteOne({notaId: nota.notaId});
            
            return Promise.resolve(Either.makeLeft<Optional<MementoNota>, Error>(new Optional<MementoNota>(nota)));
        } catch (e) {
            return Promise.resolve(Either.makeRight<Optional<MementoNota>, Error>(e));
        }
    }
}