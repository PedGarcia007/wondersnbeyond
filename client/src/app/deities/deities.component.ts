import { Component, OnInit } from '@angular/core';
import { DeitiesService } from '../services/deities.service';

@Component({
  selector: 'app-deities',
  templateUrl: './deities.component.html',
  styleUrls: ['./deities.component.css']
})
export class DeitiesComponent implements OnInit {
  deities: any[] = [];

  constructor(private deitiesService: DeitiesService) {}

  ngOnInit(): void {
    this.deitiesService.getAllDeities().subscribe(
      data => {
        this.deities = data;
      },
      error => {
        console.error('Error fetching deities:', error);
      }
    );
  }
}
