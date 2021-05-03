import {Component, OnInit} from '@angular/core';
import {Review} from './review.model';
import {Book} from '../books/book.model';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  shelf: Review[];

  constructor() {
  }

  ngOnInit(): void {
    this.shelf =
      [
        new Review(new Book('Book 1', 'Author 1', 5.0), new Date('Jan 07 2021 09:44:48'),
          5, 'Very good'),
        new Review(new Book('Book 2', 'Author 2', 3.6), new Date('Mar 22 2021 18:27:33'),
          1, 'Meh'),
        new Review(new Book('Book 3', 'Author 1', 4.2), new Date('Apr 30 2021 23:14:59'),
          3, '')
      ];
  }

}
