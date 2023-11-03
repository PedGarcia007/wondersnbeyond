import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotionsService {
  private apiUrl = 'http://localhost:3000/api/potions';
  
  constructor(private http: HttpClient) {}

  getAllPotions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
