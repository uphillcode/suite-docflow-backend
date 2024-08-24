import { Body, Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';
import { sendEmailDto } from './dto/sendEmail.dto';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class EmailController {
    constructor(private readonly emailService: EmailService) { }

    @EventPattern('email')
    async sendEmail(@Body() params: any): Promise<void> {
        let result = await this.emailService.sendEmail(params)
        // console.log('DATOS RECIBIOS', params);
        // return `Datos, recibidos de la app principal${params}`
    }
}
