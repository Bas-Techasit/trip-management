import { Test, TestingModule } from '@nestjs/testing';
import { CommandsController } from './commands.controller';
import { CommandsService } from './commands.service';

describe('CommandsController', () => {
  let commandsController: CommandsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommandsController],
      providers: [CommandsService],
    }).compile();

    commandsController = app.get<CommandsController>(CommandsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(commandsController.getHello()).toBe('Hello World!');
    });
  });
});
