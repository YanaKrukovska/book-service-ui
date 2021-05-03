import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Book} from './book.model';

@Injectable()
export class BookService {
  booksChanged = new Subject<Book[]>();

  private books: Book[] = [];

  setBooks(books: Book[]) {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }

  getBooks() {
    return this.books.slice();
  }

  getBook(index: number) {
    return this.books[index];
  }

  addBook(book: Book) {
    this.books.push(book);
    this.booksChanged.next(this.books.slice());
  }

}
