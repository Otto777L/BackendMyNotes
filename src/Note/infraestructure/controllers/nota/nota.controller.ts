import { Controller, Get,Post,Delete,Put,Body,Param} from '@nestjs/common';
import { CreateNotaDto } from 'src/DTOs/createnota.dto';
import { notaService } from 'src/Note/application/services/Notaservice';

@Controller('nota')
export class NotaController {
    constructor(private notaservice: notaService){}

    @Post()
    create(@Body() body: CreateNotaDto){
        return this.notaservice.create(body);
    }

}
