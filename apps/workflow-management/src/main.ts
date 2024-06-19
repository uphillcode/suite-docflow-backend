import { NestFactory } from '@nestjs/core';
import { WorkflowManagementModule } from './workflow-management.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkflowManagementModule);
  await app.listen(3000);
}
bootstrap();
