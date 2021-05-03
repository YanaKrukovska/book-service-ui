import {Component, OnInit} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from '../book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit {

  book: Book;
  id: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.book = this.bookService.getBook(this.id);
        }
      );
  }

}
