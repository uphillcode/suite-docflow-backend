import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentTrackingDto } from './create-document-tracking.dto';

export class UpdateDocumentTrackingDto extends PartialType(CreateDocumentTrackingDto) {}
