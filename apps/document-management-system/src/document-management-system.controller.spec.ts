import { Test, TestingModule } from '@nestjs/testing';
import { DocumentManagementSystemController } from './document-management-system.controller';
import { DocumentManagementSystemService } from './document-management-system.service';

describe('DocumentManagementSystemController', () => {
  let documentManagementSystemController: DocumentManagementSystemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DocumentManagementSystemController],
      providers: [DocumentManagementSystemService],
    }).compile();

    documentManagementSystemController = app.get<DocumentManagementSystemController>(DocumentManagementSystemController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(documentManagementSystemController.getHello()).toBe('Hello World!');
    });
  });
});
