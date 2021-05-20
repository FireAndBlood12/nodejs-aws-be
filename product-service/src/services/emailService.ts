import { SNS } from 'aws-sdk';
import { logger } from '@utils/logger';

export class EmailService {
  private static instance: EmailService;
  private sns: SNS;
  private emailTopicARN: string;

  private constructor() {
    (this.sns = new SNS({ region: process.env.SNS_REGION })),
      (this.emailTopicARN = process.env.SNS_ARN);
  }

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendEmail(Subject: string, Message: string, productsPrice: number) {
    try {
      await this.sns
        .publish({
          Subject,
          Message,
          TargetArn: this.emailTopicARN,
          MessageAttributes: {
            productsPrice: {
              DataType: 'Number',
              StringValue: productsPrice.toString()
            }
          }
        })
        .promise();
      logger.info(
        `An email ${Subject} ${Message} was sent, total imported products price is ${productsPrice}$`
      );
    } catch (err) {
      logger.error(`Error occured during sending an email ${Subject} ${Message}`, err);
      throw err;
    }
  }
}

export default EmailService.getInstance();
