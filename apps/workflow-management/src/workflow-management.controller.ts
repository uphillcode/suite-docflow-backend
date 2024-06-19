import { Controller, Get } from '@nestjs/common';
import { WorkflowManagementService } from './workflow-management.service';

@Controller()
export class WorkflowManagementController {
  constructor(private readonly workflowManagementService: WorkflowManagementService) {}

  @Get()
  getHello(): string {
    return this.workflowManagementService.getHello();
  }
}
