import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { template_email } from './template_email/email_template';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

@Injectable()
export class AppService {

  constructor(
    private readonly mailService: MailerService,
    
    //private template_email:template_email
  ){dayjs.extend(utc);
    dayjs.extend(timezone);}

  getHello(): string {
    return 'Village-Funds Api!!!';
  }

  getTimeZone():string{
    return 
  }

  // async sendMail(mailTo: string, subject: string) {
  //   try {
      
  //     const a = await this.mailService.sendMail({
  //       from: `"Village Fund" <your-email@gmail.com>`,
  //       to: mailTo,
  //       // from: 'sorasak@zicure.com',
        
  //       subject: subject,
  //       html: template_email
  //     });
  //   }catch (e) {
  //     console.log(e)
  //   }
  // }
}
