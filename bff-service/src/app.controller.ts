import {
  Controller,
  Get,
  All,
  Req,
  Inject,
  CACHE_MANAGER,
  CacheInterceptor,
  UseInterceptors,
  CacheTTL,
  HttpStatus,
  HttpException,
  HttpService,
  Logger
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { catchError, map } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  private logger = new Logger()

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(120)
  @Get('product/products')
  getProducts(@Req() request): any {
    return this.proxyRequest(
      `${process.env.product}/products`,
      request,
    );
  }

  @All('*')
  handleAll(@Req() request): any {
    const [serviceName, ...apiPath] = request.url.split('/').filter(Boolean);
    this.logger.log('serviceName', serviceName);
    
    const apiEndpoint = process.env[serviceName];

    if (!apiEndpoint) {
      throw new HttpException(`Cannot create request because service with name ${serviceName} is absent `, HttpStatus.BAD_GATEWAY);
    }

    return this.proxyRequest(
      `${apiEndpoint}/${apiPath.join('/')}`,
      request,
    );
  }

  private proxyRequest(url: string, { method, params, body: data }) {
    return this.httpService
      .request({ url, method, params,
        ...(Object.keys(data).length ? { data } : {}),
      })
      .pipe(
        map((response) => response.data),
        catchError(({ response: { data, status } }) => {
          throw new HttpException(data, status);
        }),
      );
  }
}
