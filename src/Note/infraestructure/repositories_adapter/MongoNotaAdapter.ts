import {Inject, Injectable} from '@nestjs/common';
import { Model, Promise } from 'mongoose';
import { Nota } from 'src/Note/domain/Nota';
import {NotaSchema} from 'src/Note/infraestructure/schemas/nota.schema';
import { Either } from 'src/core/ortogonal_solutions/Either';
import { Optional } from 'src/core/ortogonal_solutions/Optional';
import { RepositorioNota } from 'src/Note/domain/repositories/RepositorioNota';
import { MementoNota } from 'src/Note/domain/MementoNota';
import { IdNota } from 'src/Note/domain/value_objects/IdNota';
import * as request from 'supertest';

@Injectable()
export class MongoNotaAdapter implements RepositorioNota{
    constructor(@Inject("RepositorioNota") private readonly NotaRepository ){

    }

    buscarNotaporId(id:IdNota):Promise<Either<Optional<Nota>, Error>>{
        return Promise.resolve(undefined);
    }
    
    async createNota(nota:MementoNota): Promise<Either<Optional<MementoNota>, Error>>{
        return await this.NotaRepository.createNota(nota);
    }

    async eliminarNota(nota:MementoNota):Promise<Either<Optional<MementoNota>, Error>>{
        return Promise.resolve(undefined);
    }
    async modificarNota(nota:MementoNota):Promise<Either<Optional<MementoNota>, Error>>{
        return Promise.resolve(undefined);
    }
}