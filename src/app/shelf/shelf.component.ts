import {Component, OnInit} from '@angular/core';
import {Review} from './review.model';
import {Book} from '../books/book.model';
import {Read} from '../models/book-reads-response.model';
import {DataStorageService} from '../shared/data-storage.service';

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
  userId = 1;

  constructor(public dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.dataStorageService.getReviewsByUser(this.userId).subscribe(data => {
      this.reviews = data._embedded.reads;
    });
  }

  onTableDataChange(event): void {
    this.page = event;
  }

}
