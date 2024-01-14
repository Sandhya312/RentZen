import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = 3000 || process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.ENV === 'dev'
        ? ['error', 'warn', 'log', 'debug', 'verbose']
        : ['error', 'warn'],
    cors: true,
  });
  await app.listen(port);
}
bootstrap();
