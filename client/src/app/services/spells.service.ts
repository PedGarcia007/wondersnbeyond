import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private apiUrl = 'http://localhost:3000/api/spells';
  
  constructor(private http: HttpClient) {}

  getAllSpells(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
