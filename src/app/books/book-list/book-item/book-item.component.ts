import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
