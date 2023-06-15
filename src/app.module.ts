import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { notasSchema} from './schemas/nota.schema';
import { NotaController } from './Note/infraestructure/controllers/nota/nota.controller';
import { notaService } from './Note/application/services/Notaservice';
import { NOTA_REPO } from './Note/domain/repositories/repository.interface';
import { MongoNotaRepository } from './Note/infraestructure/repositories_adapter/nota.repository.adapter';
import { Nota } from './Note/domain/Nota';

@Module({
  imports: [
   MongooseModule.forRoot('mongodb+srv://hanchoel16:123h@cluster0.hwhtx8l.mongodb.net/nota?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:Nota.name,
    schema:notasSchema
   }])
  ],
  controllers: [NotaController],
  providers: [notaService, {
    provide: NOTA_REPO,
    useClass:MongoNotaRepository

  }],
})
export class AppModule {}
