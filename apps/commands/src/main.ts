import { NestFactory } from '@nestjs/core';
import { CommandsModule } from './commands.module';

async function bootstrap() {
  const app = await NestFactory.create(CommandsModule);
  await app.listen(3000);
}
bootstrap();
