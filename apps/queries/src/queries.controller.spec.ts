import { Test, TestingModule } from '@nestjs/testing';
import { QueriesController } from './queries.controller';
import { QueriesService } from './queries.service';

describe('QueriesController', () => {
  let queriesController: QueriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QueriesController],
      providers: [QueriesService],
    }).compile();

    queriesController = app.get<QueriesController>(QueriesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(queriesController.getHello()).toBe('Hello, World!');
    });
  });
});
