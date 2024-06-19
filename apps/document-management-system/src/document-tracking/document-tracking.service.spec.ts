import { Test, TestingModule } from '@nestjs/testing';
import { DocumentTrackingService } from './document-tracking.service';

describe('DocumentTrackingService', () => {
  let service: DocumentTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentTrackingService],
    }).compile();

    service = module.get<DocumentTrackingService>(DocumentTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
