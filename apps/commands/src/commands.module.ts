import { Module } from '@nestjs/common';
import { CommandsController } from './commands.controller';
import { CommandsService } from './commands.service';

@Module({
  imports: [],
  controllers: [CommandsController],
  providers: [CommandsService],
})
export class CommandsModule {}
