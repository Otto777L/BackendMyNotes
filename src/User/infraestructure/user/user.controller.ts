import { Controller } from '@nestjs/common';
import { MementoUser } from 'src/User/domain/mementoUser';
import { CommandHandler } from 'src/core/application/core_Comandos/CommandHandler';

@Controller('user')
export class UserController {

    commandHandler:CommandHandler<MementoUser> = new CommandHandler();

}
