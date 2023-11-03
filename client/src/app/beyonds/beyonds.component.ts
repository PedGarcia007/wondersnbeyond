import { Component, OnInit } from '@angular/core';
import { BeyondsService } from '../services/beyonds.service';

@Component({
  selector: 'app-beyonds',
  templateUrl: './beyonds.component.html',
  styleUrls: ['./beyonds.component.css']
})
export class BeyondsComponent implements OnInit {
  beyonds: any[] = [];
  title = '';
  post = '';
  author = '';
  searchTerm = '';

  constructor(private beyondsService: BeyondsService) {}

  ngOnInit(): void {
    this.loadBeyonds();
  }

  loadBeyonds(): void {
    this.beyondsService.getAllBeyonds().subscribe(
      (data: any[]) => this.beyonds = data,
      (error) => console.error(error)
    );
  }

  onSubmit(): void {
    if (!this.title.trim()) {
      console.log('Title cannot be blank');
      return;
    }

    const newBeyond = {
      title: this.title,
      post: this.post,
      author: this.author || 'Anonymous'
    };

    this.beyondsService.createBeyond(newBeyond).subscribe(
      (data: any) => {
        this.beyonds.push(data);
        this.title = '';
        this.author = '';
        this.post = '';
      },
      (error) => {
        console.error('Post failed', error);
      }
    );
  }

  onDelete(id: string): void {
    this.beyondsService.deleteBeyonds(id).subscribe(
      () => this.beyonds = this.beyonds.filter((beyond) => beyond._id !== id),
      (error) => console.error(error)
    );
  }

  updatePost(beyond: any): void {
    this.beyondsService.updateBeyond(beyond._id, beyond).subscribe(
      (updatedBeyond: any) => {
        const index = this.beyonds.findIndex((b) => b._id === updatedBeyond._id);
        this.beyonds[index] = updatedBeyond;
        beyond.isEditing = false;
      },
      (error) => {
        console.error('Update failed', error);
        beyond.isEditing = false;
      }
    );
  }

  searchPosts(): void {
    if (!this.searchTerm.trim()) {
      this.loadBeyonds();
      return;
    }

    this.beyondsService.searchBeyonds(this.searchTerm).subscribe(
      (data: any[]) => {
        this.beyonds = data;
        if (!this.beyonds || this.beyonds.length === 0) {
          console.log('Data not present');
        }
      },
      (error) => {
        console.error('Error performing search', error);
        this.beyonds = [];
      }
    );
  }
}
