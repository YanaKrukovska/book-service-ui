import {Component, OnInit} from '@angular/core';
import {Read} from '../models/book-reads-response.model';
import {DataStorageService} from '../shared/data-storage.service';
import {TokenStorageService} from '../shared/token-storage.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  reviews: Read[];
  page = 1;
  count = 0;
  tableSize = 4;

  constructor(public dataStorageService: DataStorageService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.getUserReviews();
  }

  private getUserReviews(): void {
    this.dataStorageService.getReviewsByUser(Number(this.tokenStorageService.getUserId()))
      .subscribe(data => {
        this.reviews = data._embedded.reads;
      });
  }

  onTableDataChange(event): void {
    this.page = event;
  }

  deleteReview(id: number): void {
    if (window.confirm('Are sure you want to delete this review?')) {
      this.dataStorageService.deleteReview(id).subscribe(() => {
        this.getUserReviews();
      });
    }
  }
}
