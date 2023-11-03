import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

 login(credentials: any): Observable<any> {
  return this.http.post('http://localhost:3000/api/users/login', credentials);
}


  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/users/${id}`, data);
  }

  updatePassword(userId: string, newPassword: string): Observable<any> {
    const url = `${this.apiUrl}/api/users/updatepassword/${userId}`;
    return this.http.put(url, { newPassword });
  } 

  
}
