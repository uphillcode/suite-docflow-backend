import { Module } from '@nestjs/common';
import { WorkflowManagementController } from './workflow-management.controller';
import { WorkflowManagementService } from './workflow-management.service';

@Module({
  imports: [],
  controllers: [WorkflowManagementController],
  providers: [WorkflowManagementService],
})
export class WorkflowManagementModule {}
