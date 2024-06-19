import { Injectable } from '@nestjs/common';
import { CreateDocumentReviewAndApprovalDto } from './dto/create-document-review-and-approval.dto';
import { UpdateDocumentReviewAndApprovalDto } from './dto/update-document-review-and-approval.dto';

@Injectable()
export class DocumentReviewAndApprovalService {
  create(createDocumentReviewAndApprovalDto: CreateDocumentReviewAndApprovalDto) {
    return 'This action adds a new documentReviewAndApproval';
  }

  findAll() {
    return `This action returns all documentReviewAndApproval`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentReviewAndApproval`;
  }

  update(id: number, updateDocumentReviewAndApprovalDto: UpdateDocumentReviewAndApprovalDto) {
    return `This action updates a #${id} documentReviewAndApproval`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentReviewAndApproval`;
  }
}
