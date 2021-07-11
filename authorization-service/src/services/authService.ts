export class AuthService {
  constructor() {}

  getCredsFromAuthToken(authToken: string) : { password: string; username: string } {
    const encodedCreds = this.getEncodedCreds(authToken);
    const [username, password] = Buffer.from(encodedCreds, 'base64').toString('utf-8').split(':');
    return { username, password };
  }

  checkAdminAccess(authToken) {
    const { username, password } = this.getCredsFromAuthToken(authToken);
    return process.env?.[username] && process.env?.[username] === password;
  }

  checkUser(authToken) {
    const { username, password } = this.getCredsFromAuthToken(authToken);
    return process.env?.[username] && process.env?.[username] === password;
  }

  getEncodedCreds(authorisationToken: string): string {
    return authorisationToken.split(' ')[1];
  }

  generateAWSPolicy(
    principalId: string,
    Resource: string,
    Effect: 'Deny' | 'Allow',
  ) {
    return {
      principalId,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect,
            Resource,
          },
        ],
      },
    };
  };
};

export default new AuthService();
