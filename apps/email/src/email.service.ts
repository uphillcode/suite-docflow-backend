import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { cwd } from 'process';
import path, { join } from 'path';
import { ICompany, IEmail, IEmailConfig } from './interface';
// import { ResponseGeneral } from '@shared/interfaces/reponse.interface';
import { sendEmailDto } from './dto/sendEmail.dto';
// import { obtenerNombreMes } from '@shared/helpers/functions';


@Injectable()
export class EmailService {

  private transporter: nodemailer.Transporter;
  private options: nodemailer.SendMailOptions;
  //ResponseGeneral review
  async sendEmail(sendEmail: sendEmailDto): Promise<any> {
    const { email, emailConfig, company } = sendEmail;

    let templateData: string;
    let pathToFile: string;

    if (emailConfig.path) {
      templateData = fs.readFileSync(emailConfig.path, 'utf8');
    } else {
      const pathBase = cwd();
      pathToFile = join(pathBase, 'apps', 'email', 'src', 'templates', `${email.body}.html`);
      templateData = fs.readFileSync(pathToFile, 'utf8');
    }
    const dateFixed = new Date(email.date);
    const emailBody = this.replaceVariables(templateData, {
      phone: company.primaryContact.phone,
      website: company.website,
      adreesStreet: company.address.street,
      email: company.primaryContact.email,
      name: company.name,
      office: email.office,
      officeEmail: emailConfig.user,
      date: email.date,
      year: dateFixed.getFullYear(),
      // month: obtenerNombreMes(dateFixed.getMonth())

    });

    const config: IEmailConfig = {
      SMTPServer: emailConfig.SMTPServer,
      port: emailConfig.port,
      host: emailConfig.host,
      user: emailConfig.user,
      password: emailConfig.password,
    };

    this.configureTransporter(config);
    this.configureOptions(email, emailBody);

    try {
      const result = await this.send();
      return {
        state: 'success',
        message: result
      };
    } catch (error) {
      return {
        state: 'failure',
        message: error.message
      };
    }
  }

  async sendConfirmationEmail(email: string, confirmUrl: string): Promise<void> {

  }
  async sendWelcomeEmail(email: string): Promise<void> {

  }
  async sendResetPasswordEmail(email: string, resetUrl: string): Promise<void> {

  }

  private configureTransporter(config: IEmailConfig): void {
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port || 587,
      secure: false, // Use true for port 465, false for all other ports
      auth: {
        user: config.user,
        pass: config.password,
      },
    });
  }

  private configureOptions(email: IEmail, emailBody: string): void {
    this.options = {
      from: email.from,
      to: email.recipient,
      subject: email.subject.toUpperCase(),
      html: emailBody,
      attachments: email.attachments ? email.attachments.map(attachment => ({
        filename: attachment.filename,
        path: attachment.path,
      })) : []
    }
    // console.log('data config:',this.options);        
  }

  private replaceVariables(content: string, variables: { [key: string]: any }): string {
    const regex = /{{(.*?)}}/g;
    return content.replace(regex, (match, key) => {
      const variable = key.trim();
      return variables.hasOwnProperty(variable) ? variables[variable] : match;
    });
  }

  private send(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(this.options, (error, info) => {
        if (error) {
          console.error('Error al enviar el correo electrónico:', error);
          reject(error);
        } else {
          console.log('Correo electrónico enviado exitosamente:', info.response);
          resolve(info.response);
        }
      });
    });
  }
}
