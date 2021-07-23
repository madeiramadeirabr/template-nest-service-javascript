import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Response,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_ARCH_VERSION, APP_VERSION } from '../main';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  appRoutes = ['/', 'health'];
  publicRoutes = [];
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const [req, res] = context.getArgs();
    const url = req.url;
    // Custom service headers
    res.header('Custom-Service-Version', APP_VERSION);
    res.header('Custom-Arch-Version', APP_ARCH_VERSION);

    if (!this.appRoutes.includes(url)) {
      return next.handle().pipe(map((data) => ({ data })));
    } else {
      return next.handle();
    }
  }
}
