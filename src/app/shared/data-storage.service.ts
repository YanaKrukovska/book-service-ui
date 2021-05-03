import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookResponse} from '../models/book-response.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {
  }

  books: any;
  bookResponse: BookResponse;

  getAllBooks() {
    return this.http.get<BookResponse>('http://localhost:8041/books');
  }

  getBookById(id: number) {
    return this.http.get<BookResponse>('http://localhost:8041/books');
  }
}
