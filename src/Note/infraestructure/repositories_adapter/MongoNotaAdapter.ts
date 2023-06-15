import {Inject, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nota } from 'src/Note/domain/Nota';
import {NotaSchema} from 'src/Note/infraestructure/schemas/nota.schema';
import { Either } from 'src/core/ortogonal_solutions/Either';
import { Optional } from 'src/core/ortogonal_solutions/Optional';
import { RepositorioNota } from 'src/Note/domain/repositories/RepositorioNota';
import { MementoNota } from 'src/Note/domain/MementoNota';

@Injectable()
export class MongoNotaAdapter implements RepositorioNota{
    constructor(@Inject("RepositorioNota") private readonly NotaRepository ){

    }
    async createNota(nota:MementoNota): Promise<Either<Optional<MementoNota>, Error>>{
        return await this.NotaRepository.createNota(nota);
    }


}