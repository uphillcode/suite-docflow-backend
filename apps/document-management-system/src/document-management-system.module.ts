import { Module } from '@nestjs/common';
import { DocumentManagementSystemController } from './document-management-system.controller';
import { DocumentManagementSystemService } from './document-management-system.service';
import { SecurityModule } from 'apps/security/src/security.module';
import { DocumentTrackingModule } from './document-tracking/document-tracking.module';
import { DocumentReviewAndApprovalModule } from './document-review-and-approval/document-review-and-approval.module';

@Module({
  imports: [SecurityModule, DocumentTrackingModule, DocumentReviewAndApprovalModule],
  controllers: [DocumentManagementSystemController],
  providers: [DocumentManagementSystemService],
})
export class DocumentManagementSystemModule {}
