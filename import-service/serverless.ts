import type { AWS } from '@serverless/typescript';

import importProductsFile from '@functions/importProductsFile';
import importFileParser from '@functions/importFileParser';

const serverlessConfiguration: AWS = {
  service: 'import-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    stage: 'dev',
  },
  useDotenv: true,
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'eu-west-1',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      CATALOG_ITEMS_QUEUE_URL: '${cf:product-service-${self:provider.stage}.catalogItemsQueueURL}',
    },
    lambdaHashingVersion: '20201221',
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: ['s3:ListBucket'],
            Resource: ['arn:aws:s3:::aws-import-service'],
          },
          {
            Effect: 'Allow',
            Action: ['s3:*'],
            Resource: ['arn:aws:s3:::aws-import-service/*'],
          },
          {
            Effect: 'Allow',
            Action: ['sqs:*'],
            Resource: ['${cf:product-service-${self:provider.stage}.catalogItemsQueueArn}'],
          },
        ],
      },
    },
  },
  resources: {
    Resources: {
      GatewayResponseDefault4XX: {
        Type: 'AWS::ApiGateway::GatewayResponse',
        Properties: {
          ResponseParameters: {
            'gatewayresponse.header.Access-Control-Allow-Origin': "'*'",
            'gatewayresponse.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
            'gatewayresponse.header.Access-Control-Allow-Methods': "'GET,OPTIONS'"
          },
          ResponseType: 'DEFAULT_4XX',
          RestApiId: {
            Ref: 'ApiGatewayRestApi'
          }
        }
      }
    }
  },
  // import the function via paths
  functions: {
    importFileParser,
    importProductsFile,
  },
};

module.exports = serverlessConfiguration;
