import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth-service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const isLoggedIn = this.authService.loggedIn();
    let headers = req.headers;
    if (isLoggedIn) {
      headers = headers.append('Authorization', localStorage.getItem('token'));
    }
    const authReq = req.clone({headers});
    return next.handle(authReq);
  }

}
