import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowManagementController } from './workflow-management.controller';
import { WorkflowManagementService } from './workflow-management.service';

describe('WorkflowManagementController', () => {
  let workflowManagementController: WorkflowManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WorkflowManagementController],
      providers: [WorkflowManagementService],
    }).compile();

    workflowManagementController = app.get<WorkflowManagementController>(WorkflowManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(workflowManagementController.getHello()).toBe('Hello World!');
    });
  });
});
