import {Inject, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {NotaSchema} from 'src/schemas/nota.schema';
import {CreateNotaDto} from 'src/DTOs/createnota.dto';
import { NOTA_REPO } from 'src/Note/domain/repositories/repository.interface';






@Injectable()
export class notaService{
    constructor(@Inject(NOTA_REPO) private readonly NotaRepository ){

    }
    async create(createNota: CreateNotaDto){
        return await this.NotaRepository.createNota(createNota);
    }


}