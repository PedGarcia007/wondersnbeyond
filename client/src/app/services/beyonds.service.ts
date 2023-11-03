import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeyondsService {
  private apiUrl = 'http://localhost:3000/api/beyonds';

  constructor(private http: HttpClient) {}

  getAllBeyonds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createBeyond(beyond: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, beyond);
  }

  updateBeyond(id: string, updatedBeyond: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedBeyond);
  }

  deleteBeyonds(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchBeyonds(query: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/api/search?q=${query}`);
  }
}
