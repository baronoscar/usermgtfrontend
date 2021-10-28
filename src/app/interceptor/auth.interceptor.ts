import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return undefined;
  }

}
