import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkflowManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
