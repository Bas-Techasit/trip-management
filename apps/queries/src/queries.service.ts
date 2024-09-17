import { Injectable } from '@nestjs/common';

@Injectable()
export class QueriesService {
  getHello(): string {
    return 'Hello World!';
  }
}
