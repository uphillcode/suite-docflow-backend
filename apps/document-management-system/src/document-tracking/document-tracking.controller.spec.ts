import { Test, TestingModule } from '@nestjs/testing';
import { DocumentTrackingController } from './document-tracking.controller';
import { DocumentTrackingService } from './document-tracking.service';

describe('DocumentTrackingController', () => {
  let controller: DocumentTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentTrackingController],
      providers: [DocumentTrackingService],
    }).compile();

    controller = module.get<DocumentTrackingController>(DocumentTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
