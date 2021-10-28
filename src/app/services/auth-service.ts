import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:9900/api/users/create';
  private loginUrl = 'http://localhost:9900/api/auth/login';

  constructor(private http: HttpClient) {
  }

  registerUser(user): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }

  logOut(): void{
   localStorage.clear();
  }

  loggedIn(): any{
    return !!localStorage.getItem('token');
  }
}
