import { Controller, Get } from '@nestjs/common';
import { DocumentManagementSystemService } from './document-management-system.service';

@Controller()
export class DocumentManagementSystemController {
  constructor(private readonly documentManagementSystemService: DocumentManagementSystemService) {}

  @Get()
  getHello(): string {
    return this.documentManagementSystemService.getHello();
  }
}
