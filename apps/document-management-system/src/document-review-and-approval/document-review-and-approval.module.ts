import { Module } from '@nestjs/common';
import { DocumentReviewAndApprovalService } from './document-review-and-approval.service';
import { DocumentReviewAndApprovalController } from './document-review-and-approval.controller';

@Module({
  controllers: [DocumentReviewAndApprovalController],
  providers: [DocumentReviewAndApprovalService],
})
export class DocumentReviewAndApprovalModule {}
