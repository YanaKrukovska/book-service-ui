import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book.model';
import {Subscription} from 'rxjs';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit, OnDestroy {
  /*books: Book[] = [new Book('Catcher In The Rye', 'J.D. Salinger', 4.8),
    new Book('Martin Eden', 'Jack London', 4.0),
    new Book('Flowers for Algernon', 'Daniel Keyes', 5.0)];*/

  books: Book[];
  subscription: Subscription;

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.subscription = this.bookService.booksChanged
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }
      );
    this.books = this.bookService.getBooks();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getBooks(): void {
   // console.log( this.dataStorageService.getAllBooks());
    console.log( this.dataStorageService.tryGetBooks());
  }
}
