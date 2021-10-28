import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  createUrl = `${environment.baseUrl}/users/create`;
  findAllUrl = `${environment.baseUrl}/users/findAll`;
  changePasswordUrl = `${environment.baseUrl}/users/changePassword`;

  constructor(private httpClient: HttpClient) {
  }

  save(user: User): Observable<any> {
    return this.httpClient.post(this.createUrl, user);
  }

  findAll(): Observable<any> {
    return this.httpClient.post(this.findAllUrl, {});
  }

  changePassword(request: any): Observable<any> {
    return this.httpClient.post(this.changePasswordUrl, request);
  }



}
