import { Controller } from '@nestjs/common';
import { CommandHandler } from 'src/core/application/core_Comandos/CommandHandler';

@Controller('user')
export class UserController {

    commandHandler:CommandHandler<MementoUser> = new CommandHandler();

}
