import { Controller, Get } from '@nestjs/common';
import { CommandsService } from './commands.service';

@Controller()
export class CommandsController {
  constructor(private readonly commandsService: CommandsService) {}

  @Get()
  getHello(): string {
    return this.commandsService.getHello();
  }
}
