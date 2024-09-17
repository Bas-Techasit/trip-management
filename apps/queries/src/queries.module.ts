import { Module } from '@nestjs/common';
import { QueriesController } from './queries.controller';
import { QueriesService } from './queries.service';

@Module({
  imports: [],
  controllers: [QueriesController],
  providers: [QueriesService],
})
export class QueriesModule {}
