import { Test, TestingModule } from '@nestjs/testing';
import { DocumentReviewAndApprovalController } from './document-review-and-approval.controller';
import { DocumentReviewAndApprovalService } from './document-review-and-approval.service';

describe('DocumentReviewAndApprovalController', () => {
  let controller: DocumentReviewAndApprovalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentReviewAndApprovalController],
      providers: [DocumentReviewAndApprovalService],
    }).compile();

    controller = module.get<DocumentReviewAndApprovalController>(DocumentReviewAndApprovalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
