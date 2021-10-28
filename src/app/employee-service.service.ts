import {Injectable} from '@angular/core';
import {EmployeeData} from './EmployeeData';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {catchError} from 'rxjs/operators';
import {Observable, throwError as observableThrowError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {
  e: EmployeeData = {
    id: null,
    firstName: null,
    lastName: undefined,
    email: '',
    phoneNumber: undefined,
    address: undefined
  };
  myApiUrl = 'http://localhost:8080/api/v1/employee';
  listEmployees = [];

  employee = {
    id: null,
    firstName: null,
    lastName: undefined,
    email: undefined,
    phoneNumber: undefined,
    address: undefined
  };

  constructor(private  toastr: ToastrService, private httpClient: HttpClient) {
  }

  getEmployee(): any {
    return  this.httpClient.get<any>(this.myApiUrl).pipe
    (catchError(this.handleError));

  }

  handleError(res: HttpErrorResponse): any {
    console.log(res);
    return observableThrowError(res.error || 'server error');
  }


  employeeObj(): any {
    return this.employee;
  }


  save(employee): Observable<EmployeeData> {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    this.httpClient.post<any>(this.myApiUrl, employee, {headers}).pipe(catchError(this.handleError));
    console.log(`===> myApiUrl : ${this.myApiUrl}`);
    console.log(`===> employee : ${this.employee}`);
    return this.httpClient.post<EmployeeData>(this.myApiUrl, employee)
      .pipe(
      );

  }

  update( id, employee): Observable<EmployeeData> {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    this.httpClient.post<any>(this.myApiUrl, employee, {headers}).pipe(catchError(this.handleError));
    console.log(`===> myApiUrl : ${this.myApiUrl}`);
    console.log(`===> employee : ${this.employee}`);
    return this.httpClient.put<EmployeeData>(this.myApiUrl, employee).pipe();

  }

  clearTable(): any {
    return this.listEmployees = [];
  }

  resetForm(): any {
    this.employee = {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      address: null
    };
  }

  edit(id): any {
    // const {id, firstName, lastName, address, phoneNumber, email} = e;
    // this.employee = {id, firstName, lastName, address, phoneNumber, email};
  }

  showToastr(): any {
    this.toastr.warning('EDIT EMPLOYEE  ', '  USER id ALREADY  EXISTS ', {timeOut: 2000}
    );
  }

  delete(id): Observable<any> {
    const deleteApi = `${this.myApiUrl}/${id}`;
    return this.httpClient.delete(deleteApi);
  }

  getCurrentResto(id: any): any{
    return this.httpClient.get(`${this.myApiUrl}/${id}`);
  }
}
