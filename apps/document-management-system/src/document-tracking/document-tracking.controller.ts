import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentTrackingService } from './document-tracking.service';
import { CreateDocumentTrackingDto } from './dto/create-document-tracking.dto';
import { UpdateDocumentTrackingDto } from './dto/update-document-tracking.dto';

@Controller('document-tracking')
export class DocumentTrackingController {
  constructor(private readonly documentTrackingService: DocumentTrackingService) {}

  @Post()
  create(@Body() createDocumentTrackingDto: CreateDocumentTrackingDto) {
    return this.documentTrackingService.create(createDocumentTrackingDto);
  }

  @Get()
  findAll() {
    return this.documentTrackingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentTrackingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentTrackingDto: UpdateDocumentTrackingDto) {
    return this.documentTrackingService.update(+id, updateDocumentTrackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentTrackingService.remove(+id);
  }
}
