import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentReviewAndApprovalDto } from './create-document-review-and-approval.dto';

export class UpdateDocumentReviewAndApprovalDto extends PartialType(CreateDocumentReviewAndApprovalDto) {}
