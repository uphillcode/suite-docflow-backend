import { Test, TestingModule } from '@nestjs/testing';
import { DocumentReviewAndApprovalService } from './document-review-and-approval.service';

describe('DocumentReviewAndApprovalService', () => {
  let service: DocumentReviewAndApprovalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentReviewAndApprovalService],
    }).compile();

    service = module.get<DocumentReviewAndApprovalService>(DocumentReviewAndApprovalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
