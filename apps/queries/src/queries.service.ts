import { Injectable } from '@nestjs/common';

@Injectable()
export class QueriesService {
  getHello(): string {
    return 'Test changed this file to test ci/cd!';
  }
}
