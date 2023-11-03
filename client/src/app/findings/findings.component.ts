import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.css']
})
export class FindingsComponent {
  searchQuery: string = '';
  results: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onSearch() {
    if (!this.searchQuery.trim()) {
      this.errorMessage = 'Blank search';
      this.results = [];
      return;
    }

    this.http.get<any[]>(`http://localhost:3000/api/search?q=${this.searchQuery}`).subscribe(
      data => {
        this.results = data;
        if (this.results.length === 0) {
          this.errorMessage = 'Data not present';
        } else {
          this.errorMessage = '';
        }
      },
      error => {
        this.errorMessage = 'Error performing search';
        this.results = [];
      }
    );
  }
}
