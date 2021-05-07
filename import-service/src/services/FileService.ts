import { S3 } from 'aws-sdk';
import { logger } from '@utils/logger';
import * as csv from 'csv-parser';

export class FileService {
  constructor(
    private bucketName: string,
    private bucketRegion: string,
    private uploadFolder: string,
    private parsedFolder: string,
    private signedUrlExpiration: number
  ) {}

  async createSignedURL(fileName: string, contentType: string = 'text/csv'): Promise<string> {
    const params = {
      Bucket: this.bucketName,
      Key: `${this.uploadFolder}/${fileName}`,
      Expires: this.signedUrlExpiration,
      ContentType: contentType
    };

    logger.info({ message: 'Creating new signed URL with params', params });

    return await this.connectS3().getSignedUrlPromise('putObject', params);
  }

  async parseFile(s3ObjectKey: string): Promise<void> {
    logger.info({ message: `Start parsing file: ${s3ObjectKey}` });
    const params = {
      Bucket: this.bucketName,
      Key: s3ObjectKey
    };

    logger.info({ message: `Trying to parse file`, params });
    const s3 = this.connectS3();
    const s3Stream = s3.getObject(params).createReadStream();
    s3Stream
      .pipe(csv())
      .on('open', () => console.debug(`Parsing file ${s3ObjectKey}`))
      .on('data', (data) => console.debug('csv-parser data:', data))
      .on('error', async (error) => {
        console.log('Error:', error);
        await s3
          .deleteObject({
            Bucket: this.bucketName,
            Key: s3ObjectKey
          })
          .promise();

        Promise.reject(error);
      })
      .on('end', async () => {
        const newKey = s3ObjectKey.replace(this.uploadFolder, this.parsedFolder);

        await s3
          .copyObject({
            Bucket: this.bucketName,
            CopySource: `${this.bucketName}/${s3ObjectKey}`,
            Key: newKey
          })
          .promise();

        await s3
          .deleteObject({
            Bucket: this.bucketName,
            Key: s3ObjectKey
          })
          .promise();

        Promise.resolve(`${this.bucketName}/${newKey}`);
      });
  }

  private connectS3() {
    return new S3({ region: this.bucketRegion, signatureVersion: 'v4' });
  }
}

const defaultFileService = new FileService(
  process.env.BUCKET_NAME,
  process.env.BUCKET_REGION,
  process.env.UPLOAD_FOLDER,
  process.env.PARSED_FOLDER,
  parseInt(process.env.SIGNED_URL_EXPIRATION)
);

export default defaultFileService;
