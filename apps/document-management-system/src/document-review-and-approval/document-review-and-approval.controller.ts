import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentReviewAndApprovalService } from './document-review-and-approval.service';
import { CreateDocumentReviewAndApprovalDto } from './dto/create-document-review-and-approval.dto';
import { UpdateDocumentReviewAndApprovalDto } from './dto/update-document-review-and-approval.dto';

@Controller('document-review-and-approval')
export class DocumentReviewAndApprovalController {
  constructor(private readonly documentReviewAndApprovalService: DocumentReviewAndApprovalService) {}

  @Post()
  create(@Body() createDocumentReviewAndApprovalDto: CreateDocumentReviewAndApprovalDto) {
    return this.documentReviewAndApprovalService.create(createDocumentReviewAndApprovalDto);
  }

  @Get()
  findAll() {
    return this.documentReviewAndApprovalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentReviewAndApprovalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentReviewAndApprovalDto: UpdateDocumentReviewAndApprovalDto) {
    return this.documentReviewAndApprovalService.update(+id, updateDocumentReviewAndApprovalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentReviewAndApprovalService.remove(+id);
  }
}
