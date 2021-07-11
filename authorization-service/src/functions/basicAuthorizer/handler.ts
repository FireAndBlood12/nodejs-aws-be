import { APIGatewayTokenAuthorizerHandler, APIGatewayAuthorizerResult } from 'aws-lambda';
import authService from '@services/authService';


const basicAuthorizer: APIGatewayTokenAuthorizerHandler = async event => {
  try {
    if (event.type !== 'TOKEN') {
      return 'Unauthorized' as unknown as APIGatewayAuthorizerResult;
    }

    const authToken = event.authorizationToken;

    const effect = authService.checkAdminAccess(authToken) ? 'Allow' : 'Deny';

    return authService.generateAWSPolicy(
      authService.getEncodedCreds(authToken),
      event.methodArn,
      effect
    );
  } catch (error) {
    return 'Unauthorized' as unknown as APIGatewayAuthorizerResult;
  }
};

export const main = basicAuthorizer;