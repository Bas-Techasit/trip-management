import { Controller, Get } from '@nestjs/common';
import { QueriesService } from './queries.service';

@Controller()
export class QueriesController {
  constructor(private readonly queriesService: QueriesService) {}

  @Get()
  getHello(): string {
    return this.queriesService.getHello();
  }
}
