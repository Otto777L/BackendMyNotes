import { Module } from '@nestjs/common';
import { NotaController } from './Note/infraestructure/nota-controler/nota.controller';


@Module({
  imports: [],
  controllers: [NotaController],
  providers: [],
})
export class AppModule {}
