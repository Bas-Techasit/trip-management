import { Injectable } from '@nestjs/common';

@Injectable()
export class CommandsService {
  getHello(): string {
    return 'Hello World!';
  }
}
