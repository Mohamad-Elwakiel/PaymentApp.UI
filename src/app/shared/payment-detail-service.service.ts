import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { PaymentDetailModel } from './payment-detail.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Login, User } from '../interfaces/auth';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailServiceService {
url:string = "http://localhost:5278/api/PaymentDetails";
registerUrl: string = "http://localhost:5278/api/Account/register";
loginUrl: string = "http://localhost:5278/api/Account/login";
accountUrl :string = "http://localhost:5278/api/Account";
isLoggedIn:boolean = false;
//formData:PaymentDetailService = new PaymentDetailService()

  constructor(private http: HttpClient) { }

  refreshList(){
    return this.http.get(this.url+'/getAll');    
  }
  paginatedList(pageNumber : number , pageSize : number)  
  {
    return this.http.get(`${this.url}?pageIndex=${pageNumber}&pageSize=${pageSize}`);
  }
  createUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, userData, { headers });
  }
  registerUser(userDetails:User)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.registerUrl, userDetails, { headers });

  }
  loginUser(loginDetails :Login)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginUrl, loginDetails, { headers, responseType: 'text'});
  }
  deletePaymentDetail(id:number)
  {
    return this.http.delete(this.url+'/' + id);
  }
  searchPaymentDetail(searchTerm:string)
  {
    const isNumber = /^\d+$/.test(searchTerm);
  const queryParams = isNumber ? `cardNumber=${searchTerm}` : `name=${searchTerm}`;
  const url = `${this.url}/searchUser?pageIndex=1&pageSize=10&${queryParams}`;
  return this.http.get(url);
    
  }
}
