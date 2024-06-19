import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentManagementSystemService {
  getHello(): string {
    return 'Hello World!';
  }
}
