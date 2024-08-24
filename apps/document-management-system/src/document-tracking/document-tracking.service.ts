import { Injectable } from '@nestjs/common';
import { CreateDocumentTrackingDto, UpdateDocumentTrackingDto } from './dto/all.dto';
// import { CreateDocumentTrackingDto } from './dto/create-document-tracking.dto';
// import { UpdateDocumentTrackingDto } from './dto/update-document-tracking.dto';

@Injectable()
export class DocumentTrackingService {
  create(createDocumentTrackingDto: CreateDocumentTrackingDto) {
    return 'This action adds a new documentTracking';
  }

  findAll() {
    return `This action returns all documentTracking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentTracking`;
  }

  update(id: number, updateDocumentTrackingDto: UpdateDocumentTrackingDto) {
    return `This action updates a #${id} documentTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentTracking`;
  }
}
