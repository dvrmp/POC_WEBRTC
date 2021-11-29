import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Configuration } from './configuration';
import * as helmet from 'helmet';

async function bootstrap() {
  const application = await NestFactory.create(AppModule);
  application.use(helmet());
  application.enableCors(Configuration.CORS_OPTIONS);
  await application.listen(Configuration.SERVER_PORT);
}
bootstrap();
