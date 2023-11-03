import { Component, OnInit } from '@angular/core';
import { PotionsService } from '../services/potions.service';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit {
  potions: any[] = [];

  constructor(private potionsService: PotionsService) {}

  ngOnInit(): void {
    this.potionsService.getAllPotions().subscribe(
      data => {
        this.potions = data;
      },
      error => {
        console.error('Error fetching potions:', error);
      }
    );
  }
}
