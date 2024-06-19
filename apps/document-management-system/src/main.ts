import { NestFactory } from '@nestjs/core';
import { DocumentManagementSystemModule } from './document-management-system.module';

async function bootstrap() {
  const app = await NestFactory.create(DocumentManagementSystemModule);
  await app.listen(3000);
}
bootstrap();
