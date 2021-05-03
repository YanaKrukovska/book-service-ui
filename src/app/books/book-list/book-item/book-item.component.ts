import {Component, Input, OnInit} from '@angular/core';
import {BookElement} from '../../../models/book-response.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
})
export class BookItemComponent implements OnInit {
  @Input() book: BookElement;
  @Input() index: number;

  constructor() {
  }

  ngOnInit(): void {
    this.index = this.book.id;
  }

}
