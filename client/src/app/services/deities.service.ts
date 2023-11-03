import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeitiesService {
  private apiUrl = 'http://localhost:3000/api/deities';
  
  constructor(private http: HttpClient) {}

  getAllDeities(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
