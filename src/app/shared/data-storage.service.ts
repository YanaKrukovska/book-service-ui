import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {BookService} from '../books/book.service';
import {Book} from '../books/book.model';
import {BookResponse} from '../models/book-response.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private bookService: BookService) {
  }

  books: any;
  bookResponse: BookResponse;
  res: any = [];

  requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    }),
  };

  tryGetBooks() {
    return this.http
      .get('http://localhost:8042/books', this.requestOptions)
      .subscribe(res => {
        console.log('res = ' + this.res);
      });
  }

  getAllBooks() {
    return this.http
      .get<Book[]>(
        'http://localhost:8041/books'
      )
      .pipe(
        tap(books => {
          this.books = books;
          this.bookService.setBooks(books);
        })
      );

  }
}
