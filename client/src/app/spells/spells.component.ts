import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../services/spells.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  spells: any[] = [];

  constructor(private spellsService: SpellsService) {}

  ngOnInit(): void {
    this.spellsService.getAllSpells().subscribe(
      data => {
        this.spells = data;
      },
      error => {
        console.error('Error fetching spells:', error);
      }
    );
  }
}
