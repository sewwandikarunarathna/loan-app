import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Loan} from '../models/loan.model';
import {Loanrequest} from '../models/loanrequest.model';
import { Profile } from '../models/profile.model';

const baseUrl = 'http://localhost:8080/api/loans';
const newUrl = 'http://localhost:8080/api/loanRequest';
const approveUrl = 'http://localhost:8080/api/approve';
const declineUrl = 'http://localhost:8080/api/decline';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

    //for geting token to local storage
    getToken() {
      localStorage.getItem('usertoken');
    }

    //get all loans
    getAll(): Observable<Loan[]> {
      return this.http.get<Loan[]>(baseUrl);
    }

    get(id: any): Observable<Loan> {
      return this.http.get(`${baseUrl}/${id}`);
    }

    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }

    //update a loan
    update(id: any, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }
  
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
  
    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }
  
    findByType(type: any): Observable<Loan[]> {
      return this.http.get<Loan[]>(`${baseUrl}?type=${type}`);
    }

    //send loan requests from customer board
    loanRequest(data: any): Observable<any> {
      return this.http.post(`${newUrl}/loanrequest`, data);
    }

    //get all loan requests to view in admin board
    getAllRequests(): Observable<Loanrequest[]> {
      return this.http.get<Loanrequest[]>(`${newUrl}/getloanrequests`);
    }

    

    //get each customer's requests
    getAllOneCustomerRequests(userId: any): Observable<Loanrequest[]> {
      return this.http.get<Loanrequest[]>(`${newUrl}/getcustomerrequests/${userId}`);
    }

    //send approved loans from admin board
    approveRequest(data: any): Observable<any> {
      return this.http.post(`${approveUrl}`, data);
    }

    //send approved loans from admin board
    declineRequest(data: any): Observable<any> {
      return this.http.post(`${declineUrl}`, data);
    }
    //saving profile information
    createProfile(data: any): Observable<any> {
      return this.http.post('http://localhost:8080/api/profiles', data);
    }

    //get each user's profile data
    getEachUserProfile(userId: any): Observable<Profile[]> {
      return this.http.get<Profile[]>(`http://localhost:8080/api/profiles/getprofiledetails/${userId}`);
    }

    getProfile(id: any): Observable<Profile> {
      return this.http.get(`http://localhost:8080/api/profiles/${id}`);
    }

    //update profile information
    updateProfileData(id: any, data: any): Observable<any> {
      return this.http.put(`http://localhost:8080/api/profiles/${id}`, data);
    }

    //update status to true
    updateStatus(id: any, data: any): Observable<any> {
      return this.http.put(`http://localhost:8080/api/loanRequest/approve/${id}`, data);
    }
}
